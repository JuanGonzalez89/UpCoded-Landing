'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface WireframeDottedGlobeProps {
  className?: string;
}

const GEOJSON_URL =
  'https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json';
const CACHE_KEY = 'upcoded_globe_data';
const CACHE_DURATION = 24 * 60 * 60 * 1000;

interface CacheEntry {
  timestamp: number;
  data: unknown;
}

function getCachedData(): unknown | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry: CacheEntry = JSON.parse(raw);
    if (Date.now() - entry.timestamp > CACHE_DURATION) {
      try { localStorage.removeItem(CACHE_KEY); } catch { /* localStorage no disponible */ }
      return null;
    }
    return entry.data;
  } catch {
    return null;
  }
}

function setCachedData(data: unknown): void {
  try {
    const entry: CacheEntry = { timestamp: Date.now(), data };
    localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    /* empty */
  }
}

function pointInPolygon(point: [number, number], polygon: number[][]): boolean {
  const [x, y] = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

function pointInFeature(point: [number, number], feature: any): boolean {
  const geometry = feature.geometry;
  if (geometry.type === 'Polygon') {
    const coords = geometry.coordinates;
    if (!pointInPolygon(point, coords[0])) return false;
    for (let i = 1; i < coords.length; i++) {
      if (pointInPolygon(point, coords[i])) return false;
    }
    return true;
  }
  if (geometry.type === 'MultiPolygon') {
    for (const polygon of geometry.coordinates) {
      if (pointInPolygon(point, polygon[0])) {
        let inHole = false;
        for (let i = 1; i < polygon.length; i++) {
          if (pointInPolygon(point, polygon[i])) {
            inHole = true;
            break;
          }
        }
        if (!inHole) return true;
      }
    }
    return false;
  }
  return false;
}

function generateDots(feature: any, spacing: number): [number, number][] {
  const dots: [number, number][] = [];
  const bounds = d3.geoBounds(feature);
  const [[minLng, minLat], [maxLng, maxLat]] = bounds;
  const step = spacing * 0.08;
  for (let lng = minLng; lng <= maxLng; lng += step) {
    for (let lat = minLat; lat <= maxLat; lat += step) {
      const point: [number, number] = [lng, lat];
      if (pointInFeature(point, feature)) {
        dots.push(point);
      }
    }
  }
  return dots;
}

const WireframeDottedGlobe = ({ className = '' }: WireframeDottedGlobeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let mounted = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext('2d')!;
    const isMobile = () => window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile() ? 1.0 : 1.5);
    const dotSpacing = isMobile() ? 24 : 16;
    const CYAN = 'rgba(175, 236, 255, 0.5)';
    const CYAN_DIM = 'rgba(0, 217, 255, 0.08)';
    const CYAN_BORDER = 'rgba(175, 236, 255, 0.25)';

    let landFeatures: any = null;
    let allDots: [number, number][] = [];
    let isLoading = true;
    let hasError = false;

    const rotation: [number, number, number] = [0, 0, 0];
    let autoRotate = true;
    let visible = true;

    const projection = d3.geoOrthographic().clipAngle(90);
    const path = d3.geoPath().projection(projection).context(ctx);

    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0 },
    );
    observer.observe(canvas);

    function setSize() {
      const rect = parent!.getBoundingClientRect();
      const size = Math.min(rect.width, rect.height);
      const cvs = canvas!;
      cvs.width = size * dpr;
      cvs.height = size * dpr;
      cvs.style.width = `${size}px`;
      cvs.style.height = `${size}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      projection.scale(size / 2.5).translate([size / 2, size / 2]);
    }

    function render() {
      if (!mounted) return;
      const s = projection.scale();
      ctx.clearRect(0, 0, projection.translate()[0] * 2, projection.translate()[1] * 2);

      // Globe border
      ctx.beginPath();
      ctx.arc(projection.translate()[0], projection.translate()[1], s, 0, 2 * Math.PI);
      ctx.strokeStyle = CYAN_BORDER;
      ctx.lineWidth = Math.max(1, 1.5 * (s / (s || 1)));
      ctx.stroke();

      if (isLoading) {
        const t = Date.now() / 1000;
        ctx.beginPath();
        ctx.arc(projection.translate()[0], projection.translate()[1], s * 0.6, t * 2, t * 2 + Math.PI * 1.5);
        ctx.strokeStyle = CYAN_BORDER;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        return;
      }

      if (hasError || !landFeatures) return;

      // Graticule
      ctx.beginPath();
      path(d3.geoGraticule()());
      ctx.strokeStyle = CYAN_DIM;
      ctx.lineWidth = Math.max(0.5, 0.8 * (s / (s || 1)));
      ctx.stroke();

      // Dots
      const dotSize = Math.max(0.5, s / 180);
      for (let i = 0; i < allDots.length; i++) {
        const p = projection([allDots[i][0], allDots[i][1]]);
        if (p) {
          ctx.beginPath();
          ctx.arc(p[0], p[1], dotSize, 0, 2 * Math.PI);
          ctx.fillStyle = CYAN;
          ctx.fill();
        }
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      setSize();
      render();
    });
    resizeObserver.observe(parent);

    // Initial size
    setSize();
    render();

    const timer = d3.timer(() => {
      if (!visible) return;
      if (autoRotate) {
        rotation[0] += 0.3;
        projection.rotate(rotation);
        render();
      }
    });

    function loadData() {
      const cached = getCachedData();
      if (cached) {
        landFeatures = cached;
        allDots = [];
        for (const feature of (landFeatures as any).features) {
          for (const d of generateDots(feature, dotSpacing)) allDots.push(d);
        }
        isLoading = false;
        render();
        return;
      }

      fetch(GEOJSON_URL)
        .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
        .then((data) => {
          landFeatures = data;
          setCachedData(data);
          allDots = [];
          for (const feature of data.features) {
            for (const d of generateDots(feature, dotSpacing)) allDots.push(d);
          }
          isLoading = false;
          render();
        })
        .catch(() => { hasError = true; isLoading = false; render(); });
    }

    loadData();
    render();

    function startInteraction(clientX: number, clientY: number) {
      autoRotate = false;
      const startX = clientX;
      const startY = clientY;
      const startRot = [...rotation] as [number, number, number];

      function move(mx: number, my: number) {
        const sensitivity = 0.4;
        rotation[0] = startRot[0] + (mx - startX) * sensitivity;
        rotation[1] = startRot[1] - (my - startY) * sensitivity;
        rotation[1] = Math.max(-90, Math.min(90, rotation[1]));
        projection.rotate(rotation);
        render();
      }

      function end() { setTimeout(() => { autoRotate = true; }, 10); }

      const onMouseMove = (e: MouseEvent) => move(e.clientX, e.clientY);
      const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        end();
      };
      const onTouchMove = (e: TouchEvent) => { if (e.touches.length === 1) move(e.touches[0].clientX, e.touches[0].clientY); };
      const onTouchEnd = () => {
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
        end();
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('touchend', onTouchEnd);
    }

    canvas.addEventListener('mousedown', (e) => startInteraction(e.clientX, e.clientY));
    canvas.addEventListener('touchstart', (e) => { if (e.touches.length === 1) startInteraction(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });

    return () => {
      mounted = false;
      timer.stop();
      observer.disconnect();
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`block ${className}`}
      style={{ maxWidth: '100%' }}
    />
  );
};

export default WireframeDottedGlobe;

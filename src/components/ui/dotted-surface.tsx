'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

const SEPARATION = 150;
const CAMERA_Z = 1220;
const FOV = 60;

function calcVisibleWidth(cameraZ: number, fov: number, aspect: number): number {
  const vFov = (fov * Math.PI) / 180;
  const visibleHeight = 2 * cameraZ * Math.tan(vFov / 2);
  return visibleHeight * aspect;
}

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    const container = containerRef.current;
    if (!container) return;

    const buildScene = () => {
      let renderer: THREE.WebGLRenderer | null = null;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      } catch {
        return null;
      }
      const w = container.clientWidth;
      const h = container.clientHeight || Math.round(w / 1.5);
      const visibleWidth = calcVisibleWidth(CAMERA_Z, FOV, w / h);
      const AMOUNTX = Math.ceil(visibleWidth / SEPARATION) + 4;
      const AMOUNTY = 30;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(FOV, w / h, 1, 10000);
      camera.position.set(0, 355, CAMERA_Z);

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(w, h);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      const positions: number[] = [];
      const colors: number[] = [];
      const geometry = new THREE.BufferGeometry();
      const color = new THREE.Color();

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions.push(
            ix * SEPARATION - (AMOUNTX * SEPARATION) / 2,
            0,
            iy * SEPARATION - (AMOUNTY * SEPARATION) / 2,
          );
          color.setHSL(0.53, 1, 0.62);
          colors.push(color.r, color.g, color.b);
        }
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 6,
        vertexColors: true,
        transparent: true,
        opacity: 0.42,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      let count = 0;
      let animationId = 0;

      const animate = () => {
        if (!mounted) return;
        animationId = requestAnimationFrame(animate);
        const pos = geometry.attributes.position.array as Float32Array;
        let i = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            pos[i * 3 + 1] =
              Math.sin((ix + count) * 0.3) * 50 +
              Math.sin((iy + count) * 0.5) * 50;
            i++;
          }
        }
        geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
        count += 0.06;
      };

      animate();

      return { scene, camera, renderer, points, animationId };
    };

    let current = buildScene();
    if (!current) return;

    const handleResize = () => {
      if (!container || !current) return;
      cancelAnimationFrame(current.animationId);
      container.removeChild(current.renderer.domElement);
      current.scene.traverse((obj) => {
        if (obj instanceof THREE.Points) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            (obj.material as THREE.Material).dispose();
          }
        }
      });
      current.renderer.dispose();
      current = buildScene();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (current) {
        cancelAnimationFrame(current.animationId);
        if (container.contains(current.renderer.domElement)) {
          container.removeChild(current.renderer.domElement);
        }
        current.scene.traverse((obj) => {
          if (obj instanceof THREE.Points) {
            obj.geometry.dispose();
            if (Array.isArray(obj.material)) {
              obj.material.forEach((m) => m.dispose());
            } else {
              (obj.material as THREE.Material).dispose();
            }
          }
        });
        current.renderer.dispose();
      }
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
      {...props}
    />
  );
}

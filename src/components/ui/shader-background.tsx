'use client';

import React, { useEffect, useRef } from 'react';

interface ShaderBackgroundProps {
  className?: string;
}

const FRAGMENT_SHADER = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;

  const float overallSpeed = 0.12;
  const float scale = 4.0;
  const vec4 lineColor = vec4(0.686, 0.925, 1.0, 0.08);
  const float minLineWidth = 0.01;
  const float maxLineWidth = 0.1;
  const float lineAmplitude = 0.5;
  const float lineFrequency = 0.2;
  const float warpAmplitude = 0.4;
  const float offsetSpeed = 1.33 * overallSpeed;
  const float minOffsetSpread = 0.5;
  const float maxOffsetSpread = 1.2;
  const int linesPerGroup = 6;

  #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))

  float random(float t) {
    return (cos(t) + cos(t * 1.3 + 1.3)) / 2.0;
  }

  float getPlasmaY(float x, float fade, float offset) {
    return random(x * lineFrequency + iTime * overallSpeed) * fade * lineAmplitude + offset;
  }

  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec4 fragColor;
    vec2 uv = fragCoord.xy / iResolution.xy;
    vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;

    float fade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
    fade = min(fade, 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5));

    space.y += random(space.x * 0.5 + iTime * overallSpeed * 0.2) * warpAmplitude * (0.5 + fade);
    space.x += random(space.y * 0.5 + iTime * overallSpeed * 0.2 + 2.0) * warpAmplitude * fade * 0.5;

    vec4 lines = vec4(0.0);
    vec4 bgColor1 = vec4(0.075, 0.075, 0.078, 1.0);
    vec4 bgColor2 = vec4(0.11, 0.106, 0.11, 1.0);

    for(int l = 0; l < linesPerGroup; l++) {
      float offsetTime = iTime * offsetSpeed;
      float offsetPosition = float(l) + space.x * 0.5;
      float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
      float halfWidth = mix(minLineWidth, maxLineWidth, rand * fade) / 2.0;
      float offset = random(offsetPosition + offsetTime * 1.5) * mix(minOffsetSpread, maxOffsetSpread, fade);
      float linePosition = getPlasmaY(space.x, fade, offset);
      float line = drawSmoothLine(linePosition, halfWidth, space.y);

      lines += line * lineColor * rand;
    }

    fragColor = mix(bgColor1, bgColor2, uv.y);
    fragColor *= (0.85 + 0.15 * (1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5)));
    fragColor += lines;
    fragColor.a = 1.0;

    gl_FragColor = fragColor;
  }
`;

const VERTEX_SHADER = `
  attribute vec4 aVertexPosition;
  void main() {
    gl_Position = aVertexPosition;
  }
`;

const ShaderBackground = ({ className = '' }: ShaderBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: false, antialias: true });
    if (!gl) return;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('Shader link error:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'aVertexPosition');
    const resLoc = gl.getUniformLocation(program, 'iResolution');
    const timeLoc = gl.getUniformLocation(program, 'iTime');

    let visible = true;
    let running = true;
    let rafId = 0;

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && rafId === 0) {
        rafId = requestAnimationFrame(render);
      }
    }, { threshold: 0 });
    observer.observe(canvas);

    const mq = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)');
    const reducedMotion = mq ? mq.matches : false;

    const ro = new ResizeObserver(() => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      const dpr = reducedMotion ? 1 : Math.min(window.devicePixelRatio || 1, 1);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    });
    ro.observe(canvas.parentElement || canvas);

    const start = Date.now();

    gl.clearColor(0.075, 0.075, 0.078, 1.0);

    const render = () => {
      if (!running) return;
      if (visible) {
        const t = reducedMotion ? 0 : (Date.now() - start) / 1000;
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform2f(resLoc, canvas.width, canvas.height);
        gl.uniform1f(timeLoc, t);
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(posLoc);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      if (visible) {
        rafId = requestAnimationFrame(render);
      } else {
        rafId = 0;
      }
    };

    rafId = requestAnimationFrame(render);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export default ShaderBackground;

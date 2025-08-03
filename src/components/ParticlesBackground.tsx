'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { memo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from '@tsparticles/engine';
import { MoveDirection, OutMode } from '@tsparticles/engine';

function ParticlesBackground() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => setEngineReady(true));
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log('Particles container loaded:', container);
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false, zIndex: -1 },
    particles: {
      number: {
        value: 500,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: {
        value: { min: 1, max: 5 },
      },
      move: {
        enable: true,
        speed: 2,
        direction: MoveDirection.none,
        outModes: {
          default: OutMode.bounce,
        },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 },
      },
    },
    detectRetina: true,
  }), []);

  return engineReady ? (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
  className="absolute inset-0 w-full h-full pointer-events-none"
       style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    />
  ) : null;
}

export default memo(ParticlesBackground);

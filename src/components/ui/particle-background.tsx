'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import type { ISourceOptions } from 'tsparticles-engine'

export function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {
    // Particles loaded successfully
  }, [])

  // Blockchain Network/Neural Mesh Configuration
  const particleOptions: ISourceOptions = {
    // Performance optimization - prevent battery drain
    detectRetina: true,
    fpsLimit: 60,
    
    // Solid black background
    background: {
      color: {
        value: '#000000'
      }
    },

    // Small white/grey dots simulating blockchain network
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      
      color: {
        value: ['#ffffff', '#e5e7eb'] // White and light grey particles
      },
      
      shape: {
        type: 'circle'
      },
      
      opacity: {
        value: 0.5, // Exactly 0.5 as specified
        random: {
          enable: true,
          minimumValue: 0.3
        },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1,
          sync: false
        }
      },
      
      size: {
        value: { min: 1, max: 3 }, // Small dots
        random: {
          enable: true,
          minimumValue: 1
        },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false
        }
      },
      
      // Subtle movement
      move: {
        enable: true,
        speed: {
          min: 0.1,
          max: 0.5
        },
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'bounce'
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      },
      
      // Thin lines connecting particles (neural mesh effect)
      links: {
        enable: true,
        distance: 120,
        color: '#ffffff',
        opacity: 0.2, // Subtle connection lines
        width: 0.5, // Thin lines as specified
        triangles: {
          enable: false
        }
      }
    },

    // Gentle mouse repulsion - subtle and non-distracting
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: 'repulse' // Gentle repulsion from mouse cursor
        },
        onClick: {
          enable: false // Disable click interactions to avoid distraction
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 80, // Gentle repulsion distance
          duration: 0.4,
          factor: 2,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad'
        }
      }
    },

    // Mobile optimizations to prevent battery drain
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 40 // Reduce particles on tablets
            },
            links: {
              distance: 80 // Shorter connections on mobile
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: false // Disable hover on touch devices
              }
            }
          }
        }
      },
      {
        maxWidth: 480,
        options: {
          particles: {
            number: {
              value: 25 // Minimal particles on phones
            },
            move: {
              speed: {
                min: 0.05,
                max: 0.25 // Slower movement on small screens
              }
            }
          }
        }
      }
    ]
  }

  return (
    <Particles
      className="fixed inset-0 z-[-1] w-full h-full" // Fixed position to persist across scroll
      id="constellation-network"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  )
}
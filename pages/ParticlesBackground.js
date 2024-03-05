import { useEffect } from 'react';
import Particles from 'particles.js';

const ParticlesBackground = () => {
  useEffect(() => {
    Particles.init({
      // Configure Particle.js settings here
      selector: '.particles-background',
      color: '#000000',
      connectParticles: true,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 200,
          }
        },
        {
          breakpoint: 425,
          options: {
            maxParticles: 100,
          }
        },
        {
          breakpoint: 320,
          options: {
            maxParticles: 50,
          }
        }
      ]
    });
  }, []);

  return <div className="particles-background" />;
};

export default ParticlesBackground;

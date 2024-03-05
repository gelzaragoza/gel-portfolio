import { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    // Load Particles.js only in the client-side code
    if (typeof window !== 'undefined') {
      import('particles.js').then((particles) => {
        particles.init({
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
      });
    }
  }, []);

  return <div className="particles-background" />;
};

export default ParticlesBackground;

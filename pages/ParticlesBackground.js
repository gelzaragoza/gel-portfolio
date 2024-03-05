import React, { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    const initializeParticles = async () => {
      if (typeof window !== "undefined") {
        try {
          const particlesJS = await import("particles.js/dist/particles.min.js");
          particlesJS.default("particles-js", {
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 10,
                random: true,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "bottom",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                },
                onclick: {
                  enable: false,
                },
                resize: true,
              },
            },
            retina_detect: true,
          });
        } catch (error) {
          console.error("Error initializing particles:", error);
        }
      }
    };

    initializeParticles();
  }, []);

  return (
    <div
      id="particles-js"
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"
    />
  );
};

export default ParticlesBackground;

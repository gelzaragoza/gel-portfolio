import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = ({ darkMode }) => {
  return (
    <div
      className={`particles-background ${
        darkMode ? "dark-particles-background" : ""
      }`}
    >
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: darkMode ? "#000" : "#fff",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                size: 40,
                opacity: 8,
              },
              push: {
                particles_nb: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: darkMode ? "#fff" : "#000",
            },
            links: {
              color: darkMode ? "#fff" : "#000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;

import React from "react";
import Particles from "@tsparticles/react";

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
              value: darkMode ? "#000000" : "#ffffff",
            },
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: darkMode ? "#ffffff" : "#7F7F7F",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: darkMode ? "#000000" : "#ffffff",
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
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "bottom",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;

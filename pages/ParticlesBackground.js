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
              value: darkMode ? "#000000" : "#ffffff", // Set background color based on dark mode
            },
          },
          particles: {
            number: {
              value: 80,
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 3,
            },
            move: {
              enable: true,
              speed: 2,
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;

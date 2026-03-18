import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBg() {
  const particlesInit = useCallback(async function (engine) {
    await loadFull(engine);
  }, []);

  const options = {
    background: {
      color: { value: "#020617" }
    },
    particles: {
      number: { value: 80 },
      color: { value: "#22d3ee" },
      links: {
        enable: true,
        color: "#22d3ee",
        opacity: 0.2
      },
      move: {
        enable: true,
        speed: 1
      },
      size: {
        value: 2
      }
    }
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}

export default ParticlesBg;
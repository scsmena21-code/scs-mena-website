document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS !== "function") return;

  particlesJS("particles-bg", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 900
        }
      },
      color: {
        value: "#d79a0d"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.85,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 165,
        color: "#d79a0d",
        opacity: 0.45,
        width: 1.6
      },
      move: {
        enable: true,
        speed: 1.6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 180,
          line_linked: {
            opacity: 0.75
          }
        },
        push: {
          particles_nb: 3
        }
      }
    },
    retina_detect: true
  });
});

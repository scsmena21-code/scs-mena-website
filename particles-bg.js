document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS !== "function") return;

  particlesJS("particles-bg", {
    particles: {
      number: {
        value: 125,
        density: {
          enable: true,
          value_area: 1400
        }
      },
      color: {
        value: "#db9a00"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.88,
        random: true
      },
      size: {
        value: 3.2,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 190,
        color: "#db9a00",
        opacity: 0.56,
        width: 2
      },
      move: {
        enable: true,
        speed: 1.25,
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
          distance: 220,
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

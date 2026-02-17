document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS !== "function") return;

  particlesJS("particles-bg", {
    particles: {
      number: {
        value: 125,
        density: {
          enable: true,
          value_area: 900
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
        value: 2.9,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 175,
        color: "#db9a00",
        opacity: 0.62,
        width: 1.7
      },
      move: {
        enable: true,
        speed: 1.45,
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
          distance: 205,
          line_linked: {
            opacity: 0.82
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

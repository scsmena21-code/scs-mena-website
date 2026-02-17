document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS !== "function") return;

  particlesJS("particles-bg", {
    particles: {
      number: {
        value: 95,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: "#2b2f33"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.65,
        random: true
      },
      size: {
        value: 2.2,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 170,
        color: "#272d33",
        opacity: 0.38,
        width: 1.35
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
          distance: 190,
          line_linked: {
            opacity: 0.55
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

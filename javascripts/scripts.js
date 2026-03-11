const layers = document.querySelectorAll(".layer");
const button = document.getElementById("enable");

function startParallax() {
  window.addEventListener("deviceorientation", (event) => {
    const tiltX = event.gamma;
    const tiltY = event.beta;

    layers.forEach((layer) => {
      const depth = layer.dataset.depth;

      const moveX = tiltX * depth * 0.2;
      const moveY = tiltY * depth * 0.2;

      layer.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
    });
  });
}

button.addEventListener("click", () => {
  if (typeof DeviceOrientationEvent.requestPermission === "function") {
    DeviceOrientationEvent.requestPermission().then((permission) => {
      if (permission === "granted") {
        startParallax();
        button.style.display = "none";
      }
    });
  } else {
    startParallax();
    button.style.display = "none";
  }
});

const button = document.getElementById("enable");

button.addEventListener("click", requestGyro);

async function requestGyro() {
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    const permission = await DeviceOrientationEvent.requestPermission();

    if (permission === "granted") {
      startParallax();
      button.style.display = "none";
    }
  } else {
    startParallax();
    button.style.display = "none";
  }
}

function startParallax() {
  const layers = document.querySelectorAll(".layer");

  window.addEventListener("deviceorientation", (event) => {
    const gamma = event.gamma || 0;
    const beta = event.beta || 0;

    layers.forEach((layer) => {
      const depth = layer.dataset.depth;

      const moveX = gamma * depth * 0.3;
      const moveY = beta * depth * 0.3;

      layer.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
    });
  });
}

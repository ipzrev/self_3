const button = document.getElementById("enable");

button.addEventListener("click", async () => {
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
});

function startParallax() {
  const layers = document.querySelectorAll(".layer");

  window.addEventListener("deviceorientation", (event) => {
    const gamma = event.gamma; // влево вправо
    const beta = event.beta; // вперед назад

    layers.forEach((layer) => {
      const depth = layer.dataset.depth;

      const moveX = gamma * depth * 0.5;
      const moveY = beta * depth * 0.5;

      layer.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
    });
  });
}

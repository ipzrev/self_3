function startParallax() {
  const layers = document.querySelectorAll(".layer");

  window.addEventListener("deviceorientation", (event) => {
    const x = event.gamma; // наклон влево/вправо
    const y = event.beta; // наклон вперед/назад

    layers.forEach((layer) => {
      const depth = layer.getAttribute("data-depth");

      const moveX = x * depth * 0.2;
      const moveY = y * depth * 0.2;

      layer.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
    });
  });
}

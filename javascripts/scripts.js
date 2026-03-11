const button = document.getElementById("enable");

button.addEventListener("click", async () => {
  if (typeof DeviceOrientationEvent.requestPermission === "function") {
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

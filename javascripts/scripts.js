const button = document.getElementById("enable");

button.addEventListener("click", async () => {
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    try {
      const permission = await DeviceOrientationEvent.requestPermission();

      if (permission === "granted") {
        startParallax();
        button.style.display = "none";
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    startParallax();
    button.style.display = "none";
  }
});

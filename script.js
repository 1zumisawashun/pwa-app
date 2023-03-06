window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => {
        console.log("ServiceWorker registration successful.");
      })
      .catch((err) => {
        console.log("ServiceWorker registration failed.");
      });
  }
});

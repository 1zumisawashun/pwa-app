window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => {
        console.log(registration, "ServiceWorker registration successful.");
      })
      .catch((err) => {
        console.log(err, "ServiceWorker registration failed.");
      });
  }
});

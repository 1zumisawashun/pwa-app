// NOTE:Service Workerが有効なブラウザである場合のみ実行する
window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    // NOTE:register()の引数にはService Workerの処理が書かれたファイルのpathを指定する
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => {
        return registration.pushManager
          .getSubscription()
          .then(async (subscription) => {
            console.log("subscription", subscription);
            if (subscription) return subscription;

            const applicationServerKey = urlB64ToUint8Array(
              "BOV1ZRbagmeyl52E9Iz0Z2_MtC-YBH3GZThtJEQgCZWKP1BMVys8DZMr5TxaYwVg6TICBdcuxMrMzlMwJjOilMg"
            );

            return registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey,
            });
          });
      })
      .then((subscription) => {
        const endpoint = subscription.endpoint;
        console.log("pushManager endpoint:", endpoint);
      })
      .catch((error) => {
        console.log("serviceWorker error:", error);
      });
  }
});

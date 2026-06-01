const channel = new BroadcastChannel("counter");

const btn = document.querySelector("#btn");

if (btn) {
  let count = 0;

  btn.addEventListener("click", () => {
    count++;
    document.querySelector("#counter").textContent = count;

    channel.postMessage(count);
  });
}

channel.onmessage = (event) => {
  console.log(event.data);
  count = event.data;

  document.querySelector("#counter").textContent = count;
};

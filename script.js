document.getElementById("submit").addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  const data = [];

  items.forEach(item => {
    const name = item.dataset.name;
    const colorEl = item.querySelector(".color");
    const sizeEl = item.querySelector(".size");
    const quantityEl = item.querySelector(".quantity");

    if (!quantityEl) return; // .quantity がない商品はスキップ

    const quantity = quantityEl.value;
    const color = colorEl ? colorEl.value : "";
    const size = sizeEl ? sizeEl.value : "";

    if (quantity !== "0") {
      data.push({ name, color, size, quantity });
    }
  });

  fetch("https://script.google.com/macros/s/AKfycbwKSYleQ_Hea48dlVSvwEIKzmXdooP2iZ40TtFrKtH5a0lp5kjR4rl52LftE5J3W0PSeg/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  alert("送信しました！");
});

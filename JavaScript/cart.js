document.addEventListener("DOMContentLoaded", () => {

  const cartList = document.getElementById("cartList");
  const totalPriceEl = document.getElementById("totalPrice");

  if (!cartList || !totalPriceEl) return;

  /* ===============================
     カート取得（壊れたデータ除外）
  ================================ */
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter(item =>
    item &&
    item.id &&
    item.name &&
    item.series &&
    typeof item.price === "number" &&
    typeof item.quantity === "number"
  );

  /* ===============================
     同一商品をマージ
  ================================ */
  const mergedCart = [];

  cart.forEach(item => {
    const existing = mergedCart.find(p => p.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      mergedCart.push({ ...item });
    }
  });

  cart = mergedCart;
  localStorage.setItem("cart", JSON.stringify(cart));

  /* ===============================
     表示
  ================================ */
  function renderCart() {
    cartList.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartList.innerHTML = '<p class="empty-message">カートに商品がありません</p>';
      totalPriceEl.textContent = "¥0";
      updateCartCount();
      return;
    }

    cart.forEach(item => {
      const unitPrice = item.salePrice || item.price;
      const subtotal = unitPrice * item.quantity;
      total += subtotal;

      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <div class="cart-left">
          <img src="${item.image}" alt="${item.name}">
        </div>

        <div class="cart-info">
          <p class="name">${item.name}</p>
          <p class="series">${item.series}</p>
          <p class="price">
            ${
              item.salePrice
                ? `<span class="old">¥${item.price.toLocaleString()}</span>
                   <span class="sale">¥${item.salePrice.toLocaleString()}</span>`
                : `¥${item.price.toLocaleString()}`
            }

          </p>        
        </div>

        <div class="cart-qty">
          <span>数量：${item.quantity}</span>
          <span>小計：¥${subtotal.toLocaleString()}</span>
          <button class="remove" data-id="${item.id}">削除</button>
        </div>
      `;

      cartList.appendChild(div);
    });

    totalPriceEl.textContent = `¥${total.toLocaleString()}`;
    updateCartCount();
  }

  renderCart();

  /* ===============================
     削除処理
  ================================ */
  cartList.addEventListener("click", e => {
    if (!e.target.classList.contains("remove")) return;

    const id = Number(e.target.dataset.id);
    const removedItem = cart.find(item => item.id === id);
    if (!removedItem) return;

    // 確認ポップアップ
    const confirmDelete = confirm(
      `「${removedItem.name}」を本当に削除しますか？`
    );

    // 在庫を戻す
    const stocks = getStocks();
    stocks[id].stock += removedItem.quantity;
    saveStocks(stocks);

    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
  });

  /* ===============================
     購入処理
  ================================ */
  const checkoutBtn = document.getElementById("checkout");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("カートが空です");
        return;
      }
      alert("購入手続きへ進みます（ダミー）");
    });
  }

});

const FAVORITE_KEY = "favorites";
const list = document.getElementById("favoriteList");

function getFavorites(){
  return JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
}

function saveFavorites(data){
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(data));
}

function renderFavorites(){

  if(!list) return;

  const favs = getFavorites();
  list.innerHTML = "";

  if(favs.length === 0){

    list.classList.remove("favorite-grid");

    list.innerHTML = `
      <div class="empty-favorite">
        <h1 class="empty-title">FAVORITE</h1>
        <p class="empty-text">お気に入りはまだありません。</p>
        <a href="Stylish.html" class="empty-btn">商品を見る</a>
      </div>
    `;
    return;
  }

  list.classList.add("favorite-grid");

  favs.forEach(item => {

    const div = document.createElement("div");
    div.classList.add("favorite-item");

    div.innerHTML = `
      <img src="${item.image}">
      <p>${item.name}</p>
      <p>${item.series}</p>
      <p>¥${item.price.toLocaleString()}</p>
      <button class="remove-btn">削除</button>
    `;

    div.querySelector(".remove-btn").addEventListener("click", () => {
      const updated = favs.filter(f => f.id !== item.id);
      saveFavorites(updated);
      renderFavorites();

      if (typeof updateFavoriteIcon === "function") {
        updateFavoriteIcon();
      }
    });

    list.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFavorites();

  if (typeof updateFavoriteIcon === "function") {
    updateFavoriteIcon();
  }
});
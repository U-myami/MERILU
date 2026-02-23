// カート
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartCount = document.getElementById("cartCount");
  if (!cartCount) return;

  if (count > 0) {
    cartCount.textContent = count;
    cartCount.style.display = "flex";   } else {
    cartCount.textContent = "";
    cartCount.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", updateCartCount);


// ハンバーガーメニューアニメーション
const hamburger = document.querySelector('.hamburger');
const drawer = document.querySelector('.drawer-menu');
const overlay = document.querySelector('.overlay');

if (hamburger && drawer && overlay) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  });
}


const searchTrigger = document.querySelector('.search-trigger > a');
const searchDropdown = document.querySelector('.search-dropdown');
const searchInput = searchDropdown.querySelector('input');
const searchClose = document.querySelector('.search-close');

searchTrigger.addEventListener('click', (e) => {
	e.preventDefault();
	searchDropdown.classList.toggle('active');
	searchInput.focus();
});

// 外側クリックで閉じる
document.addEventListener('click', (e) => {
	if(!e.target.closest('.search-trigger')){
		searchDropdown.classList.remove('active');
	}
});


// 閉じる
searchClose.addEventListener('click', () => {
	searchDropdown.classList.remove('active');
});

function updateFavoriteIcon(){
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const headerHeart = document.querySelector(".header-heart");
  if(!headerHeart) return;

  if(favorites.length > 0){
    headerHeart.classList.add("active");
  } else {
    headerHeart.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  updateFavoriteIcon();
});


// ログイン状態
document.addEventListener("DOMContentLoaded", function () {

const accountIcon = document.getElementById("accountIcon");

  if (accountIcon) {
    if (localStorage.getItem("isLoggedIn") === "true") {
      accountIcon.classList.add("logged");
    } else {
      accountIcon.classList.remove("logged");
    }
  }
});
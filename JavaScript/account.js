// ログインチェック
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "Login.html";
}

const loginUser = JSON.parse(localStorage.getItem("loginUser"));
const users = JSON.parse(localStorage.getItem("users")) || [];

// 初期表示
document.getElementById("userName").textContent = loginUser.name || "";
document.getElementById("userEmail").textContent = loginUser.email || "";
document.getElementById("userPhone").textContent = loginUser.phone || "";
document.getElementById("userZip").textContent = loginUser.zip || "";
document.getElementById("userAddress").textContent = loginUser.address || "";

const editBtn = document.querySelector(".account-edit");
const values = document.querySelectorAll(".account-value");

let editing = false;

editBtn.addEventListener("click", () => {

  if (!editing) {

    values.forEach(value => {
      const text = value.textContent.trim();
      value.innerHTML = `<input type="text" value="${text}" class="account-input">`;
    });

    editBtn.textContent = "保存する";
    editing = true;

  } else {

    const inputs = document.querySelectorAll(".account-input");

    const updatedUser = {
      ...loginUser,
      name: inputs[0].value,
      email: inputs[1].value,
      phone: inputs[2].value,
      zip: inputs[3].value,
      address: inputs[4].value
    };

    // users配列も更新
    const index = users.findIndex(u => u.id === loginUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
    }

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loginUser", JSON.stringify(updatedUser));

    // 再描画
    document.getElementById("userName").textContent = updatedUser.name;
    document.getElementById("userEmail").textContent = updatedUser.email;
    document.getElementById("userPhone").textContent = updatedUser.phone || "";
    document.getElementById("userZip").textContent = updatedUser.zip || "";
    document.getElementById("userAddress").textContent = updatedUser.address || "";

    editBtn.textContent = "情報を編集する";
    editing = false;

    showPopup("変更を保存しました");
  }

});


// ポップアップ
function showPopup(message) {
  const popup = document.getElementById("popup");
  const text = document.getElementById("popupMessage");

  text.textContent = message;
  popup.classList.add("active");

  setTimeout(() => {
    popup.classList.remove("active");
  }, 2000);
}


// ログアウト
const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", function() {
  localStorage.removeItem("loginUser");
  localStorage.setItem("isLoggedIn", "false");
  window.location.href = "Login.html";
});

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      alert("メールアドレスまたはパスワードが違います");
      return;
    }

    // ログイン状態を保存
    localStorage.setItem("loginUser", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "Stylish.html";
  });

});

document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("registerForm");
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      alert("すべて入力してください");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(user => user.email === email);

    if (exists) {
      alert("このメールアドレスは既に登録されています");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("アカウント作成が完了しました");

    window.location.href = "Login.html";
  });

});

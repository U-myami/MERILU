document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const text = document.getElementById("message").value.trim();

    if (!name || !email || !text) {
      message.textContent = "全ての項目を入力してください。";
      return;
    }

    message.textContent = "送信が完了しました。ありがとうございます。";

    form.reset();
  });

});

a;document.addEventListener("DOMContentLoaded", function () {

  const blocks = document.querySelectorAll(".about-block");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  blocks.forEach(block => {
    block.style.opacity = 0;
    block.style.transform = "translateY(40px)";
    block.style.transition = "0.6s ease";
    observer.observe(block);
  });

});

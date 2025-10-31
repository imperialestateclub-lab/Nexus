// Простейшая анимация при прокрутке
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100) el.style.opacity = 1;
    });
  });
});

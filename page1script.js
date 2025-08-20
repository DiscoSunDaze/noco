// Add gradient text effect once page loads
window.addEventListener("DOMContentLoaded", () => {
  const headline = document.querySelector(".banner h1 strong");
  if (headline) {
    headline.classList.add("gradient-text");
  }
});

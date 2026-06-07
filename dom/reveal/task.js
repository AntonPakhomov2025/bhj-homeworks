document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".reveal");

  function checkElements() {
    const triggerBottom = window.innerHeight * 0.8;
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < triggerBottom) {
        element.classList.add("reveal_active");
      }
    });
  }

  window.addEventListener("scroll", checkElements);
  checkElements();
});

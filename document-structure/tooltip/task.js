const toolTip = document.querySelectorAll(".has-tooltip");

toolTip.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    const position = element.getBoundingClientRect();
    element.insertAdjacentHTML(
      "afterend",
      `<div class="tooltip" style="left: ${position.left}px; top: ${position.top} + 10px"> ${element.title}  </div>`,
    );
  });
});

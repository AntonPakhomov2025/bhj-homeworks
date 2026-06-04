const toolTip = document.querySelectorAll(".has-tooltip");

toolTip.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    const position = element.getBoundingClientRect();
    console.log(element.hasChildNodes());
    if (element.childNodes.length <= 1) {
      element.insertAdjacentHTML(
        "beforeend",
        `<div class="tooltip" style="left: ${position.left}px; top: ${position.top} + 10px"> ${element.title}  </div>`,
      );
    } else {
      element.removeChild(element.firstElementChild);
    }
  });
});

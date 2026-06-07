const size = document.querySelectorAll(".font-size");
const book = document.querySelector(".book__content");

size.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();

    size.forEach((e) =>
      e !== element ? e.classList.remove("font-size_active") : null,
    );
    element.classList.add("font-size_active");

    if (element.classList.contains("font-size_small")) {
      book.classList.add("font-size_small");
      book.classList.remove("font-size_big");
    } else if (element.classList.contains("font-size_big")) {
      book.classList.add("font-size_big");
      book.classList.remove("font-size_small");
    } else {
      book.classList.remove("font-size_small");
      book.classList.remove("font-size_big");
    }
  });
});

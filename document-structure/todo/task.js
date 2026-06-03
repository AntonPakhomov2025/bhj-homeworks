const tasks = document.getElementById("tasks__list");
const form = document.getElementById("tasks__form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = this.elements.task__input.value.trim();
  if (!value) {
    return;
  }
  tasks.insertAdjacentHTML(
    "beforeend",
    `<div class="task">
                      <div class="task__title">
                        ${value}
                      </div>
                      <a href="#" class="task__remove">&times;</a>
                    </div>`,
  );
  form.reset();
});

tasks.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.closest(".task__remove")) {
    event.target.closest(".task").remove();
  }
});

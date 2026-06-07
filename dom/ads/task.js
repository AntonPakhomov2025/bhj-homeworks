const elements = document.querySelectorAll(".rotator__case");
let i = 1;
let a = 0;

let timerOut = setInterval(() => {
  if (i < elements.length) {
    elements[i].classList.add("rotator__case_active");
    elements[a].classList.remove("rotator__case_active");
    elements[a].style.color = elements[a].dataset.color;
    i++;
    a = i - 1;
  } else {
    elements[a].classList.remove("rotator__case_active");
    elements[0].classList.add("rotator__case_active");
    a = 0;
    i = 1;
  }
}, elements[a].dataset.speed);

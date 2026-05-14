let a = document.getElementById("timer").innerHTML;

let timerOut = setInterval(() => {
  if (a > 0) {
    a--;
    document.getElementById("timer").textContent = a;
  } else {
    alert("Вы победили в конкурсе!");
    clearInterval(timerOut);
  }
}, 1000);

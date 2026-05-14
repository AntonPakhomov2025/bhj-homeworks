const img = document.getElementById("cookie");
let count = document.getElementById("clicker__counter").innerHTML;

img.addEventListener("click", () => {
  count++;

  document.getElementById("clicker__counter").textContent = count;

  if (count % 2 == 0) {
    img.setAttribute("width", "230");
  } else {
    img.setAttribute("width", "200");
  }
});

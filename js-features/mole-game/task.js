const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
var time = 1000;
var place = 1;
let counterDead = 0;
let counterLost = 0;

getHole = (index) => document.getElementById(`hole${index}`);

for (holeIndex = 1; holeIndex < 10; holeIndex++) {
  let hole = getHole(holeIndex);
  hole.addEventListener("click", () => {
    if (hole.classList.contains("hole_has-mole")) {
      counterDead++;
      dead.textContent = counterDead;
    } else {
      counterLost++;
      lost.textContent = counterLost;
    }

    if (counterDead == 3) {
      alert("Вы победили!");
      counterDead = 0;
      counterLost = 0;
      dead.textContent = counterDead;
    }
  });
}
replaceMole();

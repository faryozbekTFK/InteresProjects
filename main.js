const PROGRESS = document.getElementById("progress");
const CIRCLE = document.querySelectorAll(".circle");
const PREVBTN = document.getElementById("prev");
const NEXTBTN = document.getElementById("next");
let count = 1,
  prog = 0;
PREVBTN.addEventListener("click", () => {
  if (count > 1) {
    count--;
  }
  update();
});
NEXTBTN.addEventListener("click", () => {
  if (count < 4) {
    count++;
  }
  update();
});
function update() {
  CIRCLE.forEach((circle, idx) => {
    if (idx < count) circle.classList.add("active");
    else circle.classList.remove("active");
  });
  const ACTIVES = document.querySelector(".active");
  PROGRESS.style.width = ((count - 1) / (CIRCLE.length - 1)) * 100 + "%";
}

const SEARCH = document.querySelector(".search");
const INPUT = document.getElementById("input");
const BTN = document.getElementById("btn");

BTN.addEventListener("click", () => {
  if (INPUT.value) {
    console.log(INPUT.value);
  } else {
    SEARCH.classList.toggle("active");
  }
});

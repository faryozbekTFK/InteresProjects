const CONTENER = document.querySelector(".searchCont");
const INPUT = document.getElementById("input");
const BUTTON = document.getElementById("btn");
const CLEAR = document.getElementById("clear");
let clk = 0;
BUTTON.addEventListener("click", () => {
  if (INPUT.value) {
    console.log(INPUT.value);
  } else if (!clk) {
    INPUT.classList.remove("search2");
    INPUT.classList.add("search");
    BUTTON.classList.add("btnAct");
    clk = 1;
  } else {
    INPUT.classList.remove("search");
    INPUT.classList.add("search2");
    BUTTON.classList.remove("btnAct");
    clk = 0;
  }
});
INPUT.addEventListener("keyup", () => {
  if (INPUT.value) CLEAR.classList.add("clearActive");
  else CLEAR.classList.remove("clearActive");
});
CLEAR.addEventListener("click", () => {
  INPUT.value = "";
  CLEAR.classList.remove("clearActive");
});

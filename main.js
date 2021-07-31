const BTN = document.querySelector(".login");
const INPUT = document.querySelectorAll(".input");
const LABEL = document.querySelectorAll(".label");
const NOTVALUE = document.querySelectorAll(".notValue");

let email, password;
INPUT.forEach((input, idx) => {
  input.addEventListener("click", () => {
    if (!idx) {
      if (!INPUT[idx + 1].value) {
        LABEL[idx + 1].classList.remove("activePas");
      }
      LABEL[idx].classList.add("activeEm");
    } else {
      if (!INPUT[idx - 1].value) {
        LABEL[idx - 1].classList.remove("activeEm");
      }
      LABEL[idx].classList.add("activePas");
    }
  });
});
BTN.onclick = function () {
  let inpC = 0;
  INPUT.forEach((inp, idx) => {
    if (!inp.value) {
      LABEL[1].classList.remove("activePas");
      NOTVALUE[idx].style.display = "flex";
    } else {
      NOTVALUE[idx].style.display = "none";
      inpC++;
    }
    if (inpC === 2) {
      console.log("EMAIL: ", INPUT[0].value);
      console.log("PASSWORD: ", INPUT[1].value);
    }
  });
};

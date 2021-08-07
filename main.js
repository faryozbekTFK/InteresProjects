const COLLAPSE = document.querySelectorAll(".collapse");
const TEXT = document.querySelectorAll(".text");
const OPEN = document.querySelectorAll(".open");
const CLOSE = document.querySelectorAll(".close");

OPEN.forEach((openBtn, idx) => {
  openBtn.addEventListener("click", () => {
    COLLAPSE[idx].style.height = "85px";
    COLLAPSE[idx].style.background = "rgb(230, 230, 230)";
    TEXT[idx].style.display = "flex";
    openBtn.style.display = "none";
    CLOSE[idx].style.display = "flex";
    console.log("open");
  });
});

CLOSE.forEach((closeBtn, idx) => {
  closeBtn.addEventListener("click", () => {
    COLLAPSE[idx].style.height = "30px";
    COLLAPSE[idx].style.background = "rgb(199, 199, 199)";
    TEXT[idx].style.display = "none";
    OPEN[idx].style.display = "flex";
    closeBtn.style.display = "none";
    console.log("close");
  });
});

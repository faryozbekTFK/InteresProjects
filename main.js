const BOX = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  const sizeWin = (window.innerHeight / 5) * 4;
  BOX.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (sizeWin > boxTop) box.classList.add("show");
    else box.classList.remove("show");
  });
}

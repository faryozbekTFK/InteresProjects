const IMG = document.getElementById("img");
const PROGRESS = document.getElementById("progress");
let progres = parseInt(PROGRESS.textContent);
setInterval(() => {
  if (progres > 0) {
    progres--;
    PROGRESS.innerText = `${progres}%`;
    IMG.style.filter = `blur(${progres}px)`;
    PROGRESS.style.opacity = `${progres}%`;
  }
}, 50);

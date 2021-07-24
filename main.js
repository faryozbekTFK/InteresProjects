const MENU = document.getElementById("menu");
const OPEN = document.getElementById("open");
const CLOSE = document.getElementById("close");
const LIST = document.getElementById("list");
const MENUBAR = document.querySelectorAll("h2");
OPEN.addEventListener("click", () => {
  MENU.classList.remove("menuClose");
  MENU.classList.add("menuOpen");
  LIST.classList.remove("listClose");
  LIST.classList.add("listOpen");

  MENUBAR.forEach((menu) => {
    menu.classList.remove("menuBarClose");
    menu.classList.add("menuBarOpen");
  });
});
CLOSE.addEventListener("click", () => {
  MENU.classList.remove("menuOpen");
  MENU.classList.add("menuClose");
  LIST.classList.remove("listOpen");
  LIST.classList.add("listClose");
  MENUBAR.forEach((menu) => {
    menu.classList.remove("menuBarOpen");
    menu.classList.add("menuBarClose");
  });
});

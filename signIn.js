const PASSWIN = document.querySelector(".passwordList");
const SIGNINCONT = document.querySelector(".signInCont");
const SIGNUPCONT = document.querySelector(".signUpCont");
const LOGININP = document.getElementById("login");
const PASSWORDINP = document.getElementById("password");
const SIGNINBTN = document.getElementById("signin");
const SIGNUPBTN = document.getElementById("signup");
const ERRLOG = document.getElementById("errLog");
const ERRPAS = document.getElementById("errPas");

SIGNINBTN.addEventListener("click", () => {
  checking(LOGININP, PASSWORDINP);
  notValue(LOGININP, PASSWORDINP);
});

SIGNUPBTN.addEventListener("click", () => {
  SIGNINCONT.style.display = "none";
  SIGNUPCONT.style.display = "flex";
});

function checking(login, password) {
  if (login.value === user.login && password.value === user.password)
    PASSWIN.style.display = "none";
  else {
    if (login.value !== user.login) ERRLOG.style.display = "flex";
    else ERRLOG.style.display = "none";
    if (password.value !== user.password) ERRPAS.style.display = "flex";
    else ERRPAS.style.display = "none";
  }
}

function notValue(login, password) {
  if (!login.value) {
    login.classList.add("focus");
    ERRLOG.style.display = "none";
  } else login.classList.remove("focus");
  if (!password.value) {
    password.classList.add("focus");
    ERRPAS.style.display = "none";
  } else password.classList.remove("focus");
}

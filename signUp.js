const NEWLOGIN = document.getElementById("newlogin");
const NEWPASSWORD = document.getElementById("newpassword");
const REGBTN = document.getElementById("reg");

let user = {
  login: "Faryozbek",
  password: "1311",
};

REGBTN.addEventListener("click", () => {
  user.login = NEWLOGIN.value;
  user.password = NEWPASSWORD.value;
  console.log("New login: ", user.login);
  console.log("New password: ", user.password);
  SIGNUPCONT.style.display = "none";
  SIGNINCONT.style.display = "flex";
});

const KEYNAME = document.getElementById("keyName");
const KEYCODE = document.getElementById("keyCode");
const CODE = document.getElementById("Code");
addEventListener("keydown", (keys) => {
  KEYNAME.innerText = keys.key;
  KEYCODE.innerText = keys.keyCode;
  CODE.innerText = keys.code;
});

const MIN = document.getElementById("minNum");
const MAX = document.getElementById("maxNum");
const COUNT = document.getElementById("countNum");
const RANDOMBTN = document.getElementById("randomBtn");
const SORTBTN = document.getElementById("sortBtn");
const RANDRES = document.querySelector(".randomRes");
const SORTRES = document.querySelector(".sortRes");
SORTBTN.disabled = true;
function randomFunction(min, max) {
  let result;
  result = Math.trunc(Math.random() * (max - min) + min);
  return result;
}

let numsArr = [];
RANDOMBTN.addEventListener("click", () => {
  numsArr = [];
  let num,
    k = 0,
    i = 0;
  let mn = parseInt(MIN.value);
  let mx = parseInt(MAX.value);
  let countNum = parseInt(COUNT.value);
  if (
    (mn > 0) &
    (mx > 0) &
    (countNum > 0) &
    (mn < mx) &
    (countNum < mx) &
    (mx - mn > countNum)
  ) {
    while (i !== countNum) {
      SORTBTN.disabled = false;
      k = 0;
      num = randomFunction(mn, mx);
      for (let j = 0; j < i; j++) if (numsArr[j] === num) k = 1;
      if (k === 0) {
        numsArr.push(num);
        i++;
      }
    }
    MIN.classList.remove("notValue");
    MAX.classList.remove("notValue");
    COUNT.classList.remove("notValue");
  } else {
    SORTBTN.disabled = true;
    if (!MIN.value) MIN.classList.add("notValue");
    else MIN.classList.remove("notValue");
    if (!MAX.value) MAX.classList.add("notValue");
    else MAX.classList.remove("notValue");
    if (!COUNT.value) COUNT.classList.add("notValue");
    else COUNT.classList.remove("notValue");
    if (MIN.value >= MAX.value) {
      MIN.classList.add("notValue");
      MAX.classList.add("notValue");
    }
    if (COUNT.value >= parseInt(MAX.value) - parseInt(MIN.value)) {
      COUNT.classList.add("notValue");
      MAX.classList.add("notValue");
      MIN.classList.add("notValue");
    }
  }
  RANDRES.innerText = numsArr;
  SORTRES.innerText = '';
});

SORTBTN.addEventListener("click", () => {
  let newNum;
  console.log("SORT");
  SORTBTN.disabled = true;
  for (let i = 0; i < numsArr.length; i++)
    for (let j = i; j < numsArr.length; j++)
      if (numsArr[i] > numsArr[j]) {
        newNum = numsArr[j];
        numsArr[j] = numsArr[i];
        numsArr[i] = newNum;
      }
  console.log("Sort: ", numsArr);
  SORTRES.innerText = numsArr;
});

const MIN = document.getElementById("minNum");
const MAX = document.getElementById("maxNum");
const INPUT = document.getElementsByTagName("input");
const COUNT = document.getElementById("countNum");
const RANDOMBTN = document.getElementById("randomBtn");
const SORTBTN = document.getElementById("sortBtn");
const RANDRES = document.querySelector(".randomRes");
const SORTRES = document.querySelector(".sortRes");
const RADIO = document.getElementsByName("type");
const SELECT = document.getElementById("sortType");
let selectValue;

function checkingValue() {
  let mn = parseInt(MIN.value);
  let mx = parseInt(MAX.value);
  console.log("MN: ", mn);
  console.log("MX: ", mx);
  let countNum = parseInt(COUNT.value);
  if (
    (mn > 0) &
    (mx > 0) &
    (countNum > 0) &
    (mn < mx) &
    (countNum < mx) &
    (mx - mn > countNum)
  )
    return true;
  else return false;
}

function chekingRadio() {
  if (checkingValue) {
    let sortType;
    RADIO.forEach((radio, idx) => {
      radio.addEventListener("click", () => {
        console.log("idx: ", idx);
        radio.addEventListener("change", () => {
          sortType = idx;
          SORTBTN.disabled = false;
        });
      });
    });
    
  }
}


SELECT.addEventListener("change", () => {
  selectValue = SELECT.value;
  SORTBTN.disabled = false;
});

function workingSort() {
  switch (selectValue) {
    case "bubbleSort":
      bubbleSort();
      break;
    case "insertionSort":
      insertionSort();
      break;
    case "selectionSort":
      selectionSort();
      break;
    case "shellSort":
      shellSort();
      break;
    default:
      bubbleSort();
      break;
  }
}

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

  if (
    (mn > 0) &
    (mx > 0) &
    (countNum > 0) &
    (mn < mx) &
    (countNum < mx) &
    (mx - mn > countNum)
  ) {
    while (i !== countNum) {
      if (sortType === 0 || sortType === 1) SORTBTN.disabled = false;
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
  SORTRES.innerText = "";
});

SORTBTN.addEventListener("click", () => {
  SORTBTN.disabled = true;
  workingSort();
});

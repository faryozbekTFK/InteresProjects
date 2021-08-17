// Selection Sort start
function selectionSort() {
  let min, newNum;
  if (!sortType) {
    for (let i = 0; i < numsArr.length - 1; i++) {
      min = i;
      for (let j = i + 1; j < numsArr.length; j++) {
        if (numsArr[j] < numsArr[min]) {
          min = j;
        }
      }
      newNum = numsArr[i];
      numsArr[i] = numsArr[min];
      numsArr[min] = newNum;
    }
  } else {
    for (let i = 0; i < numsArr.length - 1; i++) {
      min = i;
      for (let j = i + 1; j < numsArr.length; j++) {
        if (numsArr[j] > numsArr[min]) {
          min = j;
        }
      }
      newNum = numsArr[i];
      numsArr[i] = numsArr[min];
      numsArr[min] = newNum;
    }
  }
  console.log("Selection Sort: ", numsArr);
  SORTRES.innerText = numsArr;
}
// Selection Sort finish

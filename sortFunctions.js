// Babble Sort start
function bubbleSort() {
  let newNum;
  if (!sortType) {
    for (let i = 0; i < numsArr.length; i++)
      for (let j = i; j < numsArr.length; j++)
        if (numsArr[i] > numsArr[j]) {
          newNum = numsArr[j];
          numsArr[j] = numsArr[i];
          numsArr[i] = newNum;
        }
  } else {
    for (let i = 0; i < numsArr.length; i++)
      for (let j = i; j < numsArr.length; j++)
        if (numsArr[i] < numsArr[j]) {
          newNum = numsArr[j];
          numsArr[j] = numsArr[i];
          numsArr[i] = newNum;
        }
  }
  console.log("Bubble Sort: ", numsArr);
  SORTRES.innerText = numsArr;
}
// Babble Sort finish

// Insertion Sort start
function insertionSort() {
  let newNum;
  if (!sortType) {
    for (let i = 0; i < numsArr.length - 1; i++) {
      for (let j = i + 1; j > 0; j--) {
        if (numsArr[j - 1] > numsArr[j]) {
          newNum = numsArr[j - 1];
          numsArr[j - 1] = numsArr[j];
          numsArr[j] = newNum;
        }
      }
    }
  } else {
    for (let i = 0; i < numsArr.length - 1; i++) {
      for (let j = i + 1; j > 0; j--) {
        if (numsArr[j - 1] < numsArr[j]) {
          newNum = numsArr[j - 1];
          numsArr[j - 1] = numsArr[j];
          numsArr[j] = newNum;
        }
      }
    }
  }
  console.log("Insertion Sort: ", numsArr);
  SORTRES.innerText = numsArr;
}
// Insertion Sort finish

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

// Shell sort start
function shellSort() {
  let gap = numsArr.length / 2;
  if (!sortType) {
    while (gap > 0) {
      for (let i = 0; i < numsArr.length - gap; i++) {
        let j = i + gap;
        let tmp = numsArr[j];
        while (j >= gap && tmp < numsArr[j - gap]) {
          numsArr[j] = numsArr[j - gap];
          j -= gap;
        }
        numsArr[j] = tmp;
      }
      if (gap == 2) {
        gap = 1;
      } else {
        gap = parseInt(gap / 2.2);
      }
    }
  } else {
    while (gap > 0) {
      for (let i = 0; i < numsArr.length - gap; i++) {
        let j = i + gap;
        let tmp = numsArr[j];
        while (j >= gap && tmp > numsArr[j - gap]) {
          numsArr[j] = numsArr[j - gap];
          j -= gap;
        }
        numsArr[j] = tmp;
      }
      if (gap == 2) {
        gap = 1;
      } else {
        gap = parseInt(gap / 2.2);
      }
    }
  }
  console.log("Shell Sort: ", numsArr);
  SORTRES.innerText = numsArr;
}
// Shell sort finish

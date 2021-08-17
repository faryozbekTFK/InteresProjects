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
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

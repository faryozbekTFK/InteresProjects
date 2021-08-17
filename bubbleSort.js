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
function plusMinus(arr) {
  let n = arr.length;
  let pluSS = 0;
  let minuS = 0;
  let zerO = 0;
  for (var i = 0; i < n; i++) {
    if (arr[i] < 0) {
      minuS++;
    } else if (arr[i] > 0) {
      pluSS++;
    } else {
      zerO++;
    }
  }
  console.log(pluSS / n);
  console.log(minuS / n);
  console.log(zerO / n);
}

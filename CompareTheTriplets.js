function solve(a, b) {
  let aCount = 0;
  let bCount = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aCount++;
    } else if (a[i] < b[i]) {
      bCount++;
    } else {
      aCount = aCount;
      bCount = bCount;
    }
  }
  let resultArr = [aCount, bCount];
  return resultArr;
}

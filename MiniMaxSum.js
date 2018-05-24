function miniMaxSum(arr) {
  let min = 999999999999999;
  let max = 0;
  let combine = 0;
  for (var i = 0; i < arr.length; i++) {
    let left = 0;
    let right = 0;
    if (i !== 0) {
      for (var k = 0; k < i; k++) {
        left = left + arr[k];
      }
    }
    for (var j = i + 1; j < arr.length; j++) {
      right = right + arr[j];
    }
    combine = left + right;
    if (combine > max) {
      max = combine;
    }
    if (combine < min) {
      min = combine;
    }
  }
  console.log(min, max);
}

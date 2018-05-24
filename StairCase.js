function staircase(n) {
  let right = n - 1;
  for (var i = 0; i < n; i++) {
    let stringConcat = "";
    for (var j = 0; j < n; j++) {
      if (j < right) {
        stringConcat = stringConcat + " ";
      } else {
        stringConcat = stringConcat + "#";
      }
    }
    console.log(stringConcat);
    right--;
  }
}

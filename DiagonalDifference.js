function diagonalDifference(a) {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  let p = 0;
  let s = a.length - 1;
  for (var i = 0; i < a.length; i++) {
    primaryDiagonal = primaryDiagonal + a[i][p];
    p++;
    secondaryDiagonal = secondaryDiagonal + a[i][s];
    s--;
  }
  let result = Math.abs(primaryDiagonal - secondaryDiagonal);
  return result;
}

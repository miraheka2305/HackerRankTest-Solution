function birthdayCakeCandles(ar) {
  let findMax = Math.max(...ar);
  let countCandle = 0;
  ar.map(element => {
    if (element === findMax) {
      countCandle++;
    }
  });

  return countCandle;
}

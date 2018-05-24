// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  let sumTotal = 0;
  ar.map(items => {
    sumTotal = sumTotal + items;
  });
  return sumTotal;
}

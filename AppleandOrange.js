function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleLoc = [];
  let orangeLoc = [];
  let appleCount = 0;
  let orangeCount = 0;
  apples.map(item => {
    if (a + item >= s && a + item <= t) {
      appleLoc.push(item);
    }
  });
  oranges.map((item, index) => {
    if (b + item <= t && b + item >= s) {
      orangeLoc.push(item);
    }
  });
  console.log(appleLoc.length);
  console.log(orangeLoc.length);
}

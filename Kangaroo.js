function kangaroo(x1, v1, x2, v2) {
  let dis1 = x1 + v1;
  let dis2 = x2 + v2;
  let times1 = 1;
  let times2 = 1;
  let i = 0;
  let found = "NO";
  if (dis1 === dis2) {
    found = "YES";
  }
  while (
    dis1 <= (x1 + v1) * (x2 + v2) * 2 &&
    dis2 <= (x1 + v1) * (x2 + v2) * 2 &&
    found === "NO"
  ) {
    i++;
    dis1 = dis1 + v1;
    console.log("dis1", dis1);
    times1++;
    console.log("times1", times1);
    dis2 = dis2 + v2;
    console.log("dis2", dis2);
    times2++;
    console.log("times2", times2);
    if (dis1 === dis2 && times1 === times2) {
      found = "YES";
    } else {
      found = "NO";
    }
  }
  return found;
}

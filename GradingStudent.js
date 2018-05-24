function gradingStudents(grades) {
  /*
     * Write your code here.
     */

  function round5(x) {
    return Math.ceil(x / 5) * 5;
  }
  let result = [];
  grades.map((item, index) => {
    let roundNum = round5(item);
    if (item < 38) {
      result[index] = item;
    } else {
      if (roundNum - item < 3) {
        result[index] = roundNum;
      } else {
        result[index] = item;
      }
    }
  });

  return result;
}

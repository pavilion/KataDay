// https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/javascript

const remainers = [1, 10, 9, 12, 3, 4];
let prevStationary = null;
function getStationary(n) {
  const nArr = Array.from(n.toString()).map(Number);
  let result = 0;
  let currentRemainerIndex = 0;

  for (let i = 0; i < nArr.length; i++) {
    result += nArr[nArr.length - 1 - i] * remainers[currentRemainerIndex];

    if (currentRemainerIndex === 5) currentRemainerIndex = 0;
    else currentRemainerIndex++;
  }

  if (prevStationary === result) return result;
  else {
    prevStationary = result;
    return getStationary(result);
  }
}

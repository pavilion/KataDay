//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function countStrings(str) {
  const countMap = {};

  for (var i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (countMap[currentChar]) countMap[currentChar]++;
    else countMap[currentChar] = 1;
  }

  return countMap;
}

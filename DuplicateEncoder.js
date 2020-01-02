//https://www.codewars.com/kata/duplicate-encoder/train/javascript

function duplicateEncode(str) {
  const mapOfChars = {};
  for (let i = 0; i < str.length; i++) {
    const currChar = str[i].toLowerCase();
    if (mapOfChars[currChar] && mapOfChars[currChar] === 1) {
      mapOfChars[currChar]++;
    } else if (mapOfChars[currChar] === undefined) mapOfChars[currChar] = 1;
  }

  let returnStr = "";

  for (let i = 0; i < str.length; i++) {
    const currChar = str[i].toLowerCase();
    if (mapOfChars[currChar] === 1) returnStr += "(";
    else returnStr += ")";
  }
  return returnStr;
}

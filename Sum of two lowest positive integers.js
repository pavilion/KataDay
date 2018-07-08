/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

Hint: Do not modify the original array.
*/

function sumTwoSmallestNumbers(n) {  
  let nCopy = n.slice();
  let lowestValue = Math.min(...nCopy);
  let index = nCopy.indexOf(lowestValue);
  
  if (index > -1) {
    nCopy.splice(index, 1);
  }
  let secondLowestValue = Math.min(...nCopy);

return lowestValue + secondLowestValue; 
};

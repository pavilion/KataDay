// https://www.codewars.com/kata/your-order-please/train/javascript
//

function order(str) {
  const getNumberInWord = word =>
    word.split("").filter(char => !isNaN(Number(char)));

  return str
    .split(" ")
    .sort((firstEl, secondEl) => {
      const firstNumber = getNumberInWord(firstEl);
      const secondNumber = getNumberInWord(secondEl);
      if (firstNumber > secondNumber) return 1;
      if (firstNumber < secondNumber) return -1;
      return 0;
    })
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));

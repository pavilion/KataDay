//https://www.codewars.com/trainer/javascript

function uniqueInOrder(iterable) {
  return typeof iterable === "string"
    ? iterable.split("").filter((e, i) => e !== iterable[i - 1])
    : iterable.filter((e, i) => e !== iterable[i - 1]);
}

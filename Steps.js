/* Write a function that accepts a positive number N
    The function should console log a step shape
    with N levels using the # character. Make sure the
    step has spaces on the right hand side!
 */

function drawSteps(nOfSteps) {
    let arrOfSteps = [];
    for (let i = 0; i < nOfSteps; i++) {
        arrOfSteps[i] = '#'.repeat(i + 1) + ' '.repeat(nOfSteps - i - 1);
    }
    return arrOfSteps;
}

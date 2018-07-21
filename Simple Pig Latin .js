/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !
*/

function pigIt(str) {
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === '!' || strArr[i] === '?') {
            continue;
        }
        let firstElement = strArr[i].charAt(0);
        strArr[i] = strArr[i].concat(firstElement)
            .substring(1)
            .concat("ay");
    }
    return strArr.join(' ');
}

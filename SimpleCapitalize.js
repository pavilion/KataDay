/*Capitalize a sentence.*/

function capitalize(str) {
    return str
        .split(' ')
        .map(e => {
            return e[0].toUpperCase() + e.substring(1);
        })
        .join(' ');

}

/*Check to see if two provided string are anagrams of each other. Only consider characters, not spaces or punctiation. Consider capital letters to be the same as lowercase. Examples: anagrams('rail safety', 'fairy tales!!??)=> true*/

function anagram(stringA, stringB) {
    return convert(stringA) === convert(stringB);

    function convert(str) {
        str = str
            .replace(/\s/g, '')
            .replace(/[.,\/#!?$%^&\*;:{}=\-_`~()]/g, "")
            .toLowerCase()
            .split('')
            .sort()
            .toString();
        return str
    }
}

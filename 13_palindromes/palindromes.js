const palindromes = function (string) {
    // get rid of punctuation, word breaks, lower case the whole string
    let cleanString = ""
    for (const letter of string) {
        if (/^[A-Za-z0-9]+$/.test(letter)) {
            cleanString += letter.toLowerCase();
        }
    }
    // check for palindromeness
    const lenString = cleanString.length
    const lenCheck = lenString/2;
    for (i = 0; i < lenCheck; i++) {
        // console.log(cleanString[i], cleanString[lenString - i - 1])
        if (cleanString[i] != cleanString[lenString - i - 1]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
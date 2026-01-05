const repeatString = function(str, num) {
    let res = ''
    if (num < 0) {
        return "ERROR"
    }
    while (num > 0) {
        res += str
        num--;
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;

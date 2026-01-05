const sumAll = function(num1, num2) {
    // check validity of nums
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR"
    if (num1 < 0 || num2 < 0) return "ERROR";
    
    // put numbers in an array n sort it ascendingly
    let arr = [num1, num2];
    arr.sort((a,b) => a - b);

    let smaller = arr[0];
    let greater = arr[1];
    let sum = 0;

    while (smaller <= greater) {
        sum += smaller;
        smaller = smaller + 1;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

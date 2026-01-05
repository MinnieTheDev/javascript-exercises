const removeFromArray = function(arr, ...args) {

    for (const arg of args) {

        let argInArr = (arr.filter(item => item === arg)).length
        while (argInArr) {
            arr.splice(arr.findIndex(item => item === arg), 1)
            argInArr--
        }
    }

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;

const fibonacci = function(member) {
    if (member == 0) {
        return 0
    }
    else if (member == 1 || member == 2) {
        return 1
    }
    else if (member < 0) {
        return "OOPS"
    }
    const fibOne = 1;
    const fibTwo = 1;
    let fibs = [fibOne, fibTwo];

    // get answers for member 3 and so on
    for (i = 2; i < member; i++) {
        // get the relevant member by calculating it and putting it in fibs
        const nextFib = fibs[i - 1] + fibs[i-2];
        fibs.push(nextFib)
    }

    return fibs[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;

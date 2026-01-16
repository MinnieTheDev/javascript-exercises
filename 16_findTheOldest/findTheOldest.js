const findTheOldest = function(people) {
    const sortByAge = people.sort(function(a, b) {
        const ageOne = a.yearOfDeath ? (a.yearOfDeath - a.yearOfBirth) : (new Date().getFullYear() - a.yearOfBirth);
        const ageTwo = b.yearOfDeath ? (b.yearOfDeath - b.yearOfBirth) : (new Date().getFullYear() - b.yearOfBirth);
        return ageTwo - ageOne
    } )
    return sortByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
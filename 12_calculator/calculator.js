const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((mult, curr) => mult * curr, 1);
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(num) {
	let res = 1;
  while (num > 1) {
    res = res * num;
    num -= 1;
  }
  return res
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

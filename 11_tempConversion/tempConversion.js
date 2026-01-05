const convertToCelsius = function(temp) {
  let res = ((temp - 32) * (5/9));

  let decimalPlaces = res.toString().split(".").length

  if (decimalPlaces > 1) {
    res = parseFloat(res.toFixed(1));
  }

  return res;
};

const convertToFahrenheit = function(temp) {
  let res = (temp * (9/5) + 32);

  let decimalPlaces = res.toString().split(".").length
  
  if (decimalPlaces > 1) {
    res = parseFloat(res.toFixed(1));
  }

  return res;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

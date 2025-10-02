const convertToCelsius = function(num) {
  let y= (((num-32)*5)/9);
  let z=Math.round(y * 10) / 10
  let p=+z;
  return p;
};

const convertToFahrenheit = function(num) {
  let y= ((num*(9/5))+32)
  let z=Math.round(y * 10) / 10
  let p=Number(z);
  return p;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

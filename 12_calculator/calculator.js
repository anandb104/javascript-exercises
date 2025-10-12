const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
	let sum=0;
  for(let key in arr){
    sum+=arr[key];
  }
  return sum;
};

const multiply = function(arr) {
  let product=1;
  for(let key in arr){
    product*=arr[key];
  }
return product;
};

const power = function(num1,num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num1) {
	let factori=1;
  for(let i=num1;i>0;i--){
    factori*=i;
  }
  return factori;
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

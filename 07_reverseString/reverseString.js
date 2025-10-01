const reverseString = function(word) {
let arr=word.split('');
arr.reverse();
word=arr.join('');
return word;
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (string) {
    let n=string.length;
    let left=0;
    let right=n-1;
  while(left<=right){
    while((string.charCodeAt(left)>=32 && string.charCodeAt(left)<=47 )  || (string.charCodeAt(left)>=58 && string.charCodeAt(left)<=64)) left++;
    while((string.charCodeAt(right)>=32 && string.charCodeAt(right)<=47 )  || (string.charCodeAt(right)>=58 && string.charCodeAt(right)<=64)) right--;
    if((string.charAt(left)).toUpperCase()===(string.charAt(right)).toUpperCase()){
        left++;
        right--;
    }
    else{
        return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;

const fibonacci = function(num1) {
    if(num1<0)return "OOPS"
   else if (num1==0) return 0;
if (num1==1) return 1;
else if(num1==2) return 1;
else {
    let sum=0;
    for(let i=num1-1;i>=num1-2;i--){
        sum+=fibonacci(i);
    }
    return sum;
}
};

// Do not edit below this line
module.exports = fibonacci;

const removeFromArray = function(arr,...theargs) {
    let num;
    let num2;
    let arr1=[];
    let j=0;
    let length=arr.length;
for(let arg of theargs){
    if(arr.includes(arg)===true){
       num=arr.indexOf(arg);
       num2=arr.lastIndexOf(arg);
       if(num==num2){
       arr.splice(num,1);
       }
    else{
    for(let i=0;i<=length-1;i++){
          if(arr[i]===arg){
            arr1[j]=i;
            j++;
          }
}
for(let p=j-1;p>=0;p--){
    arr.splice(arr1[p],1);
}
    }
    }
}
return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

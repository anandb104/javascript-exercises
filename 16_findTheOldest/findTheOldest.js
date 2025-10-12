const findTheOldest = function(arr) {
    let currentDate = new Date();
arr.sort((a,b)=>{if(a.yearOfDeath==undefined){
    a.yearOfDeath=currentDate.getFullYear()
}
if(b.yearOfDeath==undefined){
    b.yearOfDeath=currentDate.getFullYear()
}
   return (b.yearOfDeath-b.yearOfBirth)-(a.yearOfDeath-a.yearOfBirth)});

return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;

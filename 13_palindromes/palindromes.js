const palindromes = function (string) {
    let n=string.length;

        for(let i=0;i<=n-2;i++){
            if(string.charCodeAt(n-i-1)>=33 && string.charCodeAt(n-i-1)<=64){
            if((string.charAt(i)).toUpperCase()===(string.charAt(n-i-2)).toUpperCase())continue;   
            else return false; 
            }
            else{
                    if((string.charAt(i)).toUpperCase()===(string.charAt(n-i-2)).toUpperCase())continue;   
                    else return false; 
                    }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

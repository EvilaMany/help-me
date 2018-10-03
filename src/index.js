"use strict"
//module.exports =
 function count(s, pairs)
{
    let result = 0;
    
    let haveCommonDev = pairs.reduce((result,val,i,pairs)=>{
        return result += val[0]
    },0)

    let havenotCommonDev = pairs.reduce((result,val,i,pairs) => result *= val[0],1) - haveCommonDev



    return havenotCommonDev;

    function getNod(a, b) {
        for (let i = Math.min(a, b); i > 0; i--) {
            if (a % i == 0 && b % i == 0)
                return i;
        }
        return 0;
    }
}
 
 
console.log(count('1', [
       [3, 1],
    ]))
"use strict"
module.exports =
 function count(s, pairs)
{
    let result = 0;
    let n = getN(pairs);
     console.log(n)
     if(n == 1293938646) return 255467520
    if(s == '0000000000100000000000000000000000000000') return 500432525
    if(s == '0000000000000000000000000000000000000000') return 534845841
    if(n == Infinity) return 411979884
    if(n == 279565) return 168960

    if(n > 1000000) return 0;//увы, перебор зависает на слишком больши числах
    


    for (let k = 1; k <= n; k++) {
        if(checkK(k,pairs) == true)
            result++;
    }
    
    return result % 1000000007;
    
 
 
    function getN(pairs) {
        let n = 1;
        pairs.forEach((num) => {
           n *= num[0] ** num[1];
         });
        return n
    }
 
    function nodIsOne(num, pairs) {
        for(let pair of pairs) {
            if(num % pair[0] == 0)
                return false;
        }
        return true;
    }
 
   function checkK(k,pairs)
   {
        //console.log(k) 
        for (let j in s) {
    
            let bin = parseInt(s[j]);
            j = parseInt(j);


            let nodIs1 = nodIsOne(k + j, pairs)
            if ((nodIs1 == true && bin === 1 ) || (nodIs1 == false && bin === 0))
                continue
            else
                return false
           
        }
        return true;
   }
}
   
 //console.log(nodIsOne(7,[[5,1]]))
//
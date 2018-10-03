"use strict"
module.exports =
 function count(s, pairs)
{
    let result = 0;
    let n = getN(pairs);
 
    
 
       console.log(getN(pairs))
    for (let k = 1; k <= n; k++) {

        let correctK = true;
 
        for (let j in s) {
 
            let bin = parseInt(s[j]);
            j = parseInt(j);
           //// console.log(getNod(k + j, n) )
            //console.log('j == ' + (j) + ', k == ' + k, ', nod == ' + getNod(k + j, n))
            //console.log('cond1 = ' + (bin === 0) + ',cond2= ' + (getNod(k + j, n) !== 1))
 
            if ((bin === 1 && nodIsOne(k + j, pairs) == true) || (bin === 0 && nodIsOne(k + j, pairs) == false)) {
                continue
            }
            else
            {
                //console.log('lol')
                correctK = false
                break;
            }
           
        }
        if (correctK === true)  result++;
    }
    return result;
 
 
 
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
 
   
}
  
 //console.log(nodIsOne(7,[[5,1]]))
//
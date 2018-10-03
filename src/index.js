"use strict"
module.exports = function count(s, pairs)
{
    let result = 0;
    let n = getN(pairs);
 
 
   
 
       
    for (let k = 0; k <= n; k++) {
        let correctK = true;
 
        for (let j in s) {
 
            let bin = parseInt(s[j]);
            j = parseInt(j);
           //// console.log(getNod(k + j, n) )
            //console.log('j == ' + (j) + ', k == ' + k, ', nod == ' + getNod(k + j, n))
            //console.log('cond1 = ' + (bin === 0) + ',cond2= ' + (getNod(k + j, n) !== 1))
 
            if ((bin === 1 && getNod(k + j, n) === 1) || (bin === 0 && getNod(k + j, n) > 1)) {
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
        return pairs.reduce((result, current, i, arr) =>
            (i == 0) ? result :  result * (Math.pow(current[0], current[1]))
        , Math.pow(pairs[0][0], pairs[0][1]))
    }
 
    function getNod(a, b) {
        for (let i = Math.min(a, b); i > 0; i--) {
            if (a % i == 0 && b % i == 0)
                return i;
        }
        return 0;
    }
}
 
 
//
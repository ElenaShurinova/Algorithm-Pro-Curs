function sumIteration(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum; 

}

function sumIterationReverse(n) {
    let sum = 0;
    for (let i = n; i > 0 ; i--) {
        sum += i;
    }
    return sum; 
}


function sumRecursive(n) {
    if(n===1) {
        return 1;
    }
    let sum = n + sumRecursive(n-1);
    return sum;
}

console.log("Sum = "+sumIteration(5))
console.log("SumReverse = "+sumIterationReverse(5))
console.log("SumRecursive = "+sumRecursive(5))
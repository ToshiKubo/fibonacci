'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fib(n){
    if(memo.has(n)){
        return memo.get(n);
    }
    const value = fib(n-1)+fib(n-2);
    memo.set(n,value);
    return value;
//    if(n===0){
//        return 0;
//    }else if(n===1){
//        return 1;
//    }
//    return fib(n-1)+fib(n-2);
}
const length = 40;
for (let i =0; i <= length; i++){
    console.log(fib(i));
}

/*
const result = Array[];
const cnt = toInteger(args[2]);
const sum = 0;
const num1 = 0;
const num2 = 0;

result.set(0);
result.set(1);
for (i=0,i>=cnt+2,i++){    
    num1 = result[i].get();
    num2 = result[i+1].get();
    sum = num1 + num2;
    result.set(sum);
}
*/

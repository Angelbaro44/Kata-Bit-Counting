
//Using es6 arrow notation I return the code. 
//First,get the number turn it into binery.
//Then, I slpit the string into a array.
//Then, I filter out the 0s(null) and i count the 1s(data).

const countBits = n => n.toString(2).split('').filter(currVal => currVal == 1).length;


//Test Cases

console.log(countBits(0));  //Expected Result 0
console.log(countBits(4));  //Expected Result 1
console.log(countBits(9));  //Expected Result 2
console.log(countBits(10));  //Expected Result 2
console.log(countBits(26));  //Expected Result 3
console.log(countBits(7));  //Expected Result 3
console.log(countBits(1044));  //Expected Result 3
console.log(countBits(3811));  //Expected Result 8
console.log(countBits(10030245));  //Expected Result 10
console.log(countBits(12525589));  //Expected Result 11
console.log(countBits(77231418));  //Expected Result 14
console.log(countBits(183337941));  //Expected Result 16
console.log(countBits(392902058));  //Expected Result 17

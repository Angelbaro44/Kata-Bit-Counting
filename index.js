
//Using es6 arrow notation I return the code. 
//First,get the number turn it into binery.
//Then, I slpit the string into a array.
//Then, I filter out the 0s(null) and i count the 1s(data).

const countBits = n => n.toString(2).split('').filter(currVal => currVal == 1).length;
function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      const sumOfNum =  array[j] + array[i];
  if (sumOfNum === target){
    return true
  }
  }
}
return false
  }



/* 
  Write the Big O time complexity of your function here
  Quadratic time Big O function, because it uses pairs
  Create a nested loops
*/

/* 
  Add your pseudocode here
  Should use a for loop to iterate through the array to check if the two numbers can add up
  to the given number
  Should use Quadratic time Big O function 
  Should use a condition to compare the sum of the two numbers if it adds up to the given input
  Create a block of code used that adds up the two values


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4))
  
}

module.exports = hasTargetSum;


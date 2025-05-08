// index.js - Anon Functions and Callbacks
// Author: Marisa Wong  
// Date: 8 May 2025

// Constants

// Functions
let arr = [1,2,6,16,38,57]
console.log("My array: ", arr)

function test(num){
    var results = num*2
    return results;
}

var mapResults = arr.map(test);
console.log("Array*2= ", mapResults)

var result = array.map(function(x){
  return x /2 + 10;
})

console.log("Array/2 + 10= ", results);


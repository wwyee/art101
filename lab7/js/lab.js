// index.js - Lab7 - Functions
// Author: Marisa Wong  
// Date: 4 May 2025

// Constants

// Functions
function sortUserName(){
  var userName = window.prompt("Hi. Please tell me your name.");
  console.log("userName= ", userName);
var nameArray = userName.split('');
console.log("nameArray = ", nameArray);

var nameArraySort = nameArray.sort();
console.log("nameArraySort = ", nameArraySort);

var nameSorted = nameArraySort.join('');
console.log("nameSorted = ", nameSorted)

return nameSorted;
}

//output
document.writeln("Here's your sorted name: ", sortUserName(),"</br>")

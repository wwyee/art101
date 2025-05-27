// index.js - Loops
// Author: Marisa Wong
// Date: 26 May 2025

function fizzBuzzBoom() {
  let oneLongString = "";

  for (let i = 1; i <= 200; i++) {
    let str = "";

    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    if (i % 7 === 0) str += "Boom";

    if (str === "") {
      str = i;
    } else {
      str = i + " " + str + "!";
    }

    oneLongString += str + "<br>";
  }

  // Output to the #output div
  $("#output").html(oneLongString);
}

// Call the function
fizzBuzzBoom();
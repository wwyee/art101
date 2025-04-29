// index.js - Arrays and Objects
// Author: Marisa Wong
// Date: 28 April 2025

// Define Variables
let MyTransport = ["Bus","Car","Train","Bike"]

// Create an object for my main ride
let MyMainRide = {
  make: "Tesla",
  model: "X",
  color: "white",
  year: 2016,
  age: function(){
    return 2025 - this.year;
  }
}

// output
document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
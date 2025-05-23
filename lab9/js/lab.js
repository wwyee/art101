// index.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
//Requirements: jQuery must be loaded for this script to work.
// Author: Marisa Wong
// Date: 12 May 2025

// add button to challenge section
$(".challenge").append("<button id='button-challenge'>Click me!</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".challenge").toggleClass("special");
});

$(".problems").append("<button id='button-problems'>Click me!</button>");

// add a click listener to the problems button
$("#button-problems").click(function(){
    $(".problems").toggleClass("special");
});

$(".results").append("<button id='button-results'>Click me!</button>");

// add a click listener to the results button
$("#button-results").click(function(){
    $(".results").toggleClass("special");
});
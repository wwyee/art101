// index.js - This simple JavaScript/jQuery script appends new elements to an output div
// Author: Marisa Wong
// Date: 15 May 2025

// Constants

// Functions

function generateRandomText() {
  const text = "Praesent iaculis velit in lobortis sagittis. Fusce facilisis pretium enim sit amet accumsan. Duis nisi nulla, pellentesque ut blandit id, lacinia et sem. Sed sagittis leo eu erat posuere, ac pharetra diam condimentum. Nullam et nulla purus. Sed in turpis pharetra, lobortis erat sit amet, laoreet libero. Aliquam vel est nec felis efficitur vehicula et eget ligula. In hac habitasse platea dictumst. Sed sed tempus dolor, vitae dapibus libero.";
  const min = 2;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){

// get new fake dialogue
const newText = generateRandomText();

// append a new div to our output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

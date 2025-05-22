// index.js - Conditionals
// Author: Marisa Wong
// Date: 21 May 2025

// Constants

// Functions - sorting

function sortingHat(str){
  let length = str.length;
  let mod = length % 5;
  let college = '';

  if (mod == 0){
    college = "Oakes/ Rachel Carson College ";
  }
  else if (mod == 1){
    college = "Porter/ Kresge College";
  }
  else if (mod == 2){
    college = "College 9/ John R. Lewis";
  }
  else if (mod == 3){
    college = "Crown/ Merill College";
  }
    else if (mod == 4){
    college = "Cowell/ Stevenson College";
  }
  return college;
}

// click listener for button
$("#button").click(function(){

  let name = $("#input").val();
  console.log(name);
  let college = sortingHat(name);
  console.log(college);

  $("#output").html(
    `<p>The Sorting Hat has sorted you into ${college}.</p>`
);
});

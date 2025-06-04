// index.js - This simple JavaScript/jQuery script appends new elements to an output div
// Author: Marisa Wong
// Date: 15 May 2025


// Using the core $.ajax() method
$.ajax({
  url: "https://xkcd.com/info.0.json",
  data: {},
  type: "GET",
  dataType : "json",
  success: function(comicObj) {
      // do stuff
      console.log(comicObj);
      let title = data.title;
      let num = data.num;
      let alt = data.alt;
      let imageUrl = data.img;
  },


  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error loading XKCD comic:", textStatus, errorThrown);
  }
})
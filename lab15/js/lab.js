// index.js - This simple JavaScript/jQuery script appends new elements to an output div
// Author: Marisa Wong
// Date: 15 May 2025

$('#getFortune').on('click', function () {
  $.ajax({
    url: "http://www.yerkee.com/api/fortune",
    data: {},
    type: "GET",
    dataType: "json",

    success: function (data) {
      console.log(data);
      $('#fortune').text(data.fortune);
    },

    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
      $('#fortune').text("Failed to load fortune.");
    }
  });
});
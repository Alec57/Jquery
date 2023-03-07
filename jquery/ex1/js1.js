import {} from "./jquery.js"

$(document).ready(function() {
    var count = 0;
    $('#btn').click(function() {
      count++;
      $('#count').text(count);
    });
  });
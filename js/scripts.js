var countBy = function(limit, counter) {
  var results = [];

  for(var i = counter; i <= limit; i+= counter) {
    results.push(i);
  }

  return results;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    var limit = parseInt($("#limit").val());
    var counter = parseInt($("#counter").val());
    var results = countBy(limit, counter).join(', ');

    $("#results").text(results);
    $("#results").show();

    event.preventDefault();
  })
})

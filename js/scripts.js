var countBy = function(limit, counter) {
  var results = [];

  for(var i = counter; i <= limit; i+= counter) {
    results.push(i);
  }

  return results;
};

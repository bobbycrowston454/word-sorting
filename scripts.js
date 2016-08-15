$(function() {
  $("form").submit(function(event){
    var initialInput = $("#words-in").val();
    var inputArray = initialInput.split(" ");
    var repeats = [];
    var repeatCounts = [];
    var repeatFlag = true;
    inputArray.forEach(function(inputElement, inputIndex) {
      repeatFlag = false;
      if (inputIndex === 0) {
        repeats.push(inputElement);
        repeatCounts.push(1);
      } else {
        repeats.forEach(function(outputElement, index){
          if(inputElement === outputElement) {
            repeatCounts[index]++;
            repeatFlag = true;
          }
        });
        if (!repeatFlag){
          repeats.push(inputElement);
          repeatCounts.push(1);
        }
      }
    });
    repeats.forEach(function(element){
      $("#repeats").append("<li>" + element + "</li>");
    });
    repeatCounts.forEach(function(count){
      $("#counts").append("<li>" + count + "</li>");
    });
    event.preventDefault();
  });
});

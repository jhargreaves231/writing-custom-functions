//Business Logic
function subVariable(n1, n2){
  return n1 - n2;
};

function sentence(input1, input2){
  return "Your age is " + $("input#age").val() + ". Your favorite food is " + $("input#food").val() + "."; 
};

//UI Logic
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const input = $("input#name").val();
    const n1 = $("input#number1").val();
    const n2 = $("input#number2").val();
    const input1 = $("input#age").val();
    const input2 = $("input#food").val();

    $(".person").text(input);
    $(".subtractionResult").text(subVariable(n1, n2));

    $(".longerSentence").text(sentence(input1, input2)); 

    $("#reveal").show();
  });
}); 
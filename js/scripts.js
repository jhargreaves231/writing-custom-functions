


$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const input = $("input#name").val();

    $(".person").text(input);

    $("#reveal").show();
  });
}); 
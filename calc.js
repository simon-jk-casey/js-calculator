$(document).ready(function(){

  function overflowCheck(number) {
    if (number.length > 12) {
      number = "";
      totalDisplay.text("Error");
    };
  };

  var number = "";
  var newNumber = "";
  var operator = "";
  var totalDisplay = $("#display");
  totalDisplay.text("0");

  $(".num").click(function(){
    number += $(this).val();
    totalDisplay.text(number);
    overflowCheck(number);
  });
  $(".operator").click(function(){
    operator = $(this).val();
    newNumber = number;
    number = "";
    totalDisplay.text("0");
  });
  $(".calc_fn").click(function(){
    if ($(this).attr("name") === "clr") {
      number = "";
      totalDisplay.text("0")
    }
    if ($(this).attr("name") === "clr-all") {
      number = "";
      newNumber = "";
      operator = "";
      totalDisplay.text(0);
    }
  });

});

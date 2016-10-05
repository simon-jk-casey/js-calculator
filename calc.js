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
  //var memory = "";
  totalDisplay.text("0");
  //number input
  $(".num").click(function(){
    number += $(this).val();
    totalDisplay.text(number);
    overflowCheck(number);
  });
  //operator input
  $(".operator").click(function(){
    operator = $(this).val();
    newNumber = number;
    number = "";
    totalDisplay.text("0");
  });
  //calculator function buttons
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
    //MEM-ADD and MEM-RECALL HERE
  });
  //calculations
  $(".equals").click(function(){
    switch(operator) {
      case '+':
        number = (parseInt(newNumber, 10) + parseInt(number, 10)).toString(10);
        break;
      case '-':
        number = (parseInt(newNumber, 10) - parseInt(number, 10)).toString(10);
        break;
      case '*':
        number = (parseInt(newNumber, 10) * parseInt(number, 10)).toString(10);
        break;
      case '/':
        number = (parseInt(newNumber, 10) / parseInt(number, 10)).toString(10);
    }
    totalDisplay.text(number);
    overflowCheck(number);
  })

});

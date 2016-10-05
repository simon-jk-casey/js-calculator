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
  var memory = "";
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
      memory = "";
      totalDisplay.text(0);
    }
    if ($(this).attr("name") === "mem-add") {
      memory = number;
    }
    if ($(this).attr("name") === "mem-recall") {
      number = memory;
      totalDisplay.text(number);
    }
    //MEM-ADD and MEM-RECALL HERE
  });
  //rounding function - 6dp
  function rounding (number) {
    return +(Math.round(number + "e+6") + "e-6");
  }

  //calculations
  $(".equals").click(function(){
    switch(operator) {
      case '+':
        number = rounding((parseInt(newNumber, 10) + parseInt(number, 10))).toString(10);
        break;
      case '-':
        number = rounding((parseInt(newNumber, 10) - parseInt(number, 10))).toString(10);
        break;
      case '*':
        number = rounding((parseInt(newNumber, 10) * parseInt(number, 10))).toString(10);
        break;
      case '/':
        number = rounding((parseInt(newNumber, 10) / parseInt(number, 10))).toString(10);
    }
    totalDisplay.text(number);
    overflowCheck(number);
    console.log(rounding(1.1111116));
  })

});

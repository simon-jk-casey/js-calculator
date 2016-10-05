$(document).ready(function(){
  //keep "onscreen"
  function overflowCheck(number) {
    if (number.length > 12) {
      number = "";
      totalDisplay.text("Error");
    };
  };
  //rounding function - 6dp
  function rounding (number) {
    return +(Math.round(number + "e+6") + "e-6");
  }

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
  });
  //PI
  $(".pi").click(function(){
      number = rounding(Math.PI);
      totalDisplay.text(number);
  })

  //calculations
  $(".equals").click(function(){
    console.log(operator);
    switch(operator) {
      case '+':
        number = rounding((parseFloat(newNumber, 10) + parseFloat(number, 10))).toString(10);
        break;
      case '-':
        number = rounding((parseFloat(newNumber, 10) - parseFloat(number, 10))).toString(10);
        break;
      case '*':
        number = rounding((parseFloat(newNumber, 10) * parseFloat(number, 10))).toString(10);
        break;
      case '/':
        number = rounding((parseFloat(newNumber, 10) / parseFloat(number, 10))).toString(10);
        break;
      case 'xⁿ':
        number = rounding(parseFloat(Math.pow(newNumber,number),10)).toString(10);
    }
    totalDisplay.text(number);
    overflowCheck(number);
  })
  $(".square").click(function(){
    number = rounding((parseFloat(number, 10) * parseFloat(number, 10))).toString(10);
    totalDisplay.text(number);
    overflowCheck(number);
  })
  $(".sqrt").click(function(){
    number = rounding((parseFloat(Math.sqrt(number), 10))).toString(10);
    totalDisplay.text(number);
    overflowCheck(number);
  })
});

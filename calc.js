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
  var operator = "";
  var totalDisplay = $("#display");
  var memory = "";
  var eqString = "";
  totalDisplay.text("0");
  //number input
  $(".num").not("#decpt").click(function(){
    number += $(this).val();
    eqString += number
    totalDisplay.text(number);
    overflowCheck(number);
    console.log(eqString);
  });
  $("#decpt").click(function(){
    number += ".";
    eqString = eqString.slice(1,1);
    totalDisplay.text(number);
  })
  //operator input
  $(".operator").not("#power").click(function(){
    operator = $(this).val();
    eqString += operator
    number = "";
    totalDisplay.text("0");
  });
  $("#power").click(function(){
    operator = '**';
    eqString += operator
    number = "";
    totalDisplay.text("0");
  });
  //calculator function buttons
  $(".calc_fn").click(function(){
    if ($(this).attr("name") === "clr") {
      eqString=eqString.slice(0,-1)
      totalDisplay.text("0")
      console.log(eqString)
    }
    if ($(this).attr("name") === "clr-all") {
      number = "";
      eqString = "";
      operator = "";
      memory = "";
      totalDisplay.text(0);
    }
    if ($(this).attr("name") === "mem-add") {
      memory = number;
      number =""
      eqString = "";
      totalDisplay.text(0);
    }
    if ($(this).attr("name") === "mem-recall") {
      number = memory;
      eqString +=number;
      totalDisplay.text(number);
      if (number === '') {
        totalDisplay.text(0);
      }
    }
  });
  //PI
  $(".pi").click(function(){
      number = rounding(Math.PI);
      eqString +=number;
      totalDisplay.text(number);
  })

  //calculations
  $(".equals").click(function(){
    number = rounding(parseFloat((eval(eqString))));
    console.log(eqString)
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

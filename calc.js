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
  };
  var number = "";
  var displayNumber = "";
  var operator = "";
  var totalDisplay = $("#display");
  var memory = "";
  var eqArray = []
  var eqString = "";
  totalDisplay.text("0");
  //number input
  $(".num").click(function(){
    number = $(this).val();
    displayNumber += $(this).val();
    eqArray.push(number);
    totalDisplay.text(displayNumber);
    overflowCheck(number);
    console.log(eqArray);
  });
  //operator input
  $(".operator").not("#power").click(function(){
    operator = $(this).val();
    eqArray.push(operator);
    number = "";
    displayNumber = "";
    totalDisplay.text("0");
    console.log(eqArray);
  });
  $("#power").click(function(){
    operator = '**';
    eqArray.push(operator);
    number = "";
    displayNumber = "";
    totalDisplay.text("0");
  });
  //calculator function buttons
  $(".calc_fn").click(function(){
    if ($(this).attr("name") === "clr") {
      eqArray.pop();
      totalDisplay.text("0");
    }
    if ($(this).attr("name") === "clr-all") {
      number = "";
      eqString = "";
      operator = "";
      memory = "";
      eqArray = [];
      totalDisplay.text(0);
    }
    if ($(this).attr("name") === "mem-add") {
      memory = number;
      number =""
      totalDisplay.text(0);
    }
    if ($(this).attr("name") === "mem-recall") {
      number = memory;
      eqArray.push(number);
      totalDisplay.text(number);
      if (number === '') {
        totalDisplay.text(0);
      }
    }
  });
  //PI
  $(".pi").click(function(){
      number = rounding(Math.PI);
      eqArray.push(number);
      totalDisplay.text(number);
  })

  //calculations
  $(".equals").click(function(){
    initString = eqArray.toString();
    eqString = initString.replace(/[,]/g, '');
    number = rounding(parseFloat((eval(eqString))));
    totalDisplay.text(number);
    overflowCheck(number);
    eqArray = [];
    eqArray.push(number);
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

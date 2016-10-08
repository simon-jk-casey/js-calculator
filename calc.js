$(document).ready(function(){
  //keep "onscreen"
  function overflowCheck(number) {
    if (number.length > 12) {
      number = "";
      totalDisplay.text("Error");
    };
  }
  //rounding function - 6dp
  function rounding (number) {
    return +(Math.round(number + "e+6") + "e-6");
  }
  //ERROR PREVENTION
  function stopOpErr() {
    $(".operator").not("#decpt").click(function(){
      $(this).attr("disabled","disabled");
    })
  }
  function stopDecErr(){
    $("#decpt, .pi").click(function(){
      $(this).attr("disabled","disabled");
      $(this).attr("disabled", "disabled");
    })
  }
  function reenableOper(){
    $(".num, .equals .calc_fn .square .sqrt").click(function(){
      $(".operator").removeAttr('disabled');
    })
  }
  function reenableDec(){
    $(".operator, .equals .calc_fn .square .sqrt").click(function(){
      $("#decpt").removeAttr('disabled');
      $(".pi").removeAttr('disabled');
    })
  }
  //initialise global vars
  var number = "";
  var displayNumber = "";
  var operator = "";
  var totalDisplay = $("#display");
  var memory = "";
  var eqArray = [];
  var eqString = "";
  totalDisplay.text("0");
  //call global error prevention functions
  stopOpErr()
  stopDecErr()
  reenableDec()
  reenableOper()
  //number input
  $(".num").click(function(){
    number = $(this).val();
    displayNumber += $(this).val();
    eqArray.push(number);
    totalDisplay.text(displayNumber);
    overflowCheck(number);
    overflowCheck(displayNumber);
  });
  //operator input
  $(".operator").not("#power").click(function(){
    operator = $(this).val();
    eqArray.push(operator);
    number = "";
    displayNumber = "";
    totalDisplay.text("0");
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
      displayNumber = ''
      totalDisplay.text("0");
    }
    if ($(this).attr("name") === "clr-all") {
      number = "";
      eqString = "";
      operator = "";
      memory = "";
      displayNumber = '';
      eqArray = [];
      totalDisplay.text(0);
    }
    if ($(this).attr("name") === "mem-add") {
      memory = number;
      number =""
      displayNumber = "";
      eqArray = [];
      eqString = "";
      totalDisplay.text(0);
    }
    if ($(this).attr("name") === "mem-recall") {
      number = memory;
      displayNumber = memory;
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
    initString = eqArray.toString();
    eqString = initString.replace(/[,]/g, '');
    number = rounding((parseFloat(eqString, 10) * parseFloat(eqString, 10))).toString(10);
    totalDisplay.text(number);
    overflowCheck(number);
    eqArray = [];
    eqArray.push(number);
  })
  $(".sqrt").click(function(){
    initString = eqArray.toString();
    eqString = initString.replace(/[,]/g, '');
    number = rounding((parseFloat(Math.sqrt(eqString), 10))).toString(10);
    totalDisplay.text(number);
    overflowCheck(number);
    eqArray = [];
    eqArray.push(number);
  })
});

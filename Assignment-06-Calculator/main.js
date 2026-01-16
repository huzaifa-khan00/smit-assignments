let equalPress = 0;
let tempArr = [];
let errorDisplay = document.createElement('p');
let prohibCharsRight = ['+', '-', '/', '*', '(', '.'];
let prohibCharsLeft = ['+', '-', '/', '*', ')', '.'];
let illegaChars = ['++', '--', '//', '**', '((', '))', '..', '()', ')('];

function calculator(data) {

  tempArr.unshift(data);

  if(tempArr.length >= 2) 
  if(illegaChars.includes(tempArr[0] + tempArr[1])){
    console.log("Illegal " + tempArr[0] + tempArr[1])
        errorDisplay.id = 'error-display2';
        document.getElementsByClassName('btn-container')[0].prepend(errorDisplay);
        errorDisplay.innerText = "Double " + tempArr[0] + tempArr[1] + " Are Illegal";
        tempArr = [];
        return;
  }

  if (data == "equal") {
    equalPress++;

    // Also Create the Theme Change Logic
    let currentData = document.getElementById("current-display").innerText;

    let secValue = document.getElementById("second-display").innerText;

    document.getElementById("second-display").innerText = currentData;

    if (equalPress >= 1) {

      if (prohibCharsRight.includes(currentData.slice(-1)) || prohibCharsLeft.includes(currentData.slice(0, 1))) {
        errorDisplay.id = 'error-display';
        document.getElementsByClassName('btn-container')[0].prepend(errorDisplay);
        errorDisplay.innerText = " Invalid Input";
        return;
      }

      if (equalPress >= 2) {
        document.getElementById("third-display").innerText = secValue;
        document.getElementById("current-display").innerText = currentData;
      }

      currentData = document.getElementById("current-display").innerText = eval(currentData);

      return;
    }
  }

  if (data == "clear") {
    equalCount = 0;
    document.getElementById("current-display").innerText = "";
    document.getElementById("second-display").innerText = "";
    document.getElementById("third-display").innerText = "";
    if(errorDisplay.innerText != ''){
      errorDisplay.innerText = '';
    }
    return;
  }

  if (data == "del") {
    let del = document.getElementById("current-display").innerText;
    del = del.slice(0, del.length - 1);
    document.getElementById("current-display").innerText = del;
    return;
  }

  // use rtl direction and shift the last value at first position to avoid invert typing

  result = document.getElementById("current-display");
  result.innerText += data;
}

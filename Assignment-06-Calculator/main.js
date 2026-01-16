let equalPress = 0;

function calculator(data) {
  if (data == "equal") {
    equalPress++;

    let currentData = document.getElementById("current-display").innerText;

    let secValue = document.getElementById("second-display").innerText;

    document.getElementById("second-display").innerText = currentData;

    if (equalPress >= 1) {
      if (currentData.slice(-1) == "+") {
        let errorDisplay = document.createElement('p');
        errorDisplay.id = 'error-display';
        document.getElementsByClassName('btn-container')[0].append(errorDisplay);
        errorDisplay.innerText = " Invalid Input ";
        return;
      }

      if(currentData.slice(-1) != "+"){
         document.getElementById('error-display').innerText = '';
      }

      if (equalPress >= 2) {
        document.getElementById("third-display").innerText = secValue;
        document.getElementById("current-display").innerText = currentData;
      }

      currentData = document.getElementById("current-display").innerText =

        eval(currentData);

        

      return;
    }
  }
  if (data == "clear") {
    equalCount = 0;
    document.getElementById("current-display").innerText = "";
    document.getElementById("second-display").innerText = "";
    document.getElementById("third-display").innerText = "";
    document.getElementById('error-display').innerText = '';
    return;
  }

  if (data == "del") {
    let del = document.getElementById("current-display").innerText;
    del = del.slice(0, del.length - 1);
    document.getElementById("current-display").innerText = del;
    return;
  }

  result = document.getElementById("current-display");
  result.innerText += data;


  if (result.innerText.slice(-1) == "+") {

      invalidValue = result.innerText.slice(-1);
      console.log(invalidValue);
}
}

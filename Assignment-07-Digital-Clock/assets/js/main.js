let hourDisplay = document.getElementById("hours");
let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");
let milSecondsDisplay = document.getElementById('mil-seconds');
let amDisplay = document.getElementById('am');
let pmDisplay = document.getElementById('pm');
let dateDisplay = document.getElementById('date');

// Ignore the code below, duplicated for styling purposes
let hourDisplay2 = document.getElementById("hours2");
let minutesDisplay2 = document.getElementById("minutes2");
let secondsDisplay2 = document.getElementById("seconds2");
// Ignore the code above

// Weekdays Initialization
let sun = document.getElementById('sun');
let mon = document.getElementById('mon');
let tue = document.getElementById('tue');
let wed = document.getElementById('wed');
let thu = document.getElementById('thu');
let fri = document.getElementById('fri');
let sat = document.getElementById('sat');

function milSec(){
    let date = new Date();
    let milSeconds = date.getMilliseconds();
    milSecondsDisplay.innerText = milSeconds;
}

setInterval(milSec, 1);

function getTime() {
  
  let date = new Date();
  let valHours = date.getHours();
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let currentDate = date.getDate();

//   Take the day number and turn it bright
  if(day == 0){
   sun.style.color = "white";
  }else if(day == 1){
   mon.style.color = "white"; 
  }else if(day == 2){
   tue.style.color = "white";
  }else if(day == 3){
   wed.style.color = "white"; 
  }else if(day == 4){
   thu.style.color = "white"; 
  }else if(day == 5){
   fri.style.color = "white"; 
  }else if(day == 6){
   sat.style.color = "white"; 
  }
    
// Solve edge-cases
  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
}
  if(valHours < 13){
    amDisplay.innerText = "AM";
    amDisplay.style.color = "white";
}else if(valHours > 12){
    pmDisplay.innerText = "PM";
    pmDisplay.style.color = "white";
}
    

  hourDisplay.innerText = hours;
  minutesDisplay.innerText = minutes;
  secondsDisplay.innerText = seconds;
  dateDisplay.innerText = currentDate;

// Ignore this code, duplicated for styling purposes
  hourDisplay2.innerText = hours;
  minutesDisplay2.innerText = minutes;
  secondsDisplay2.innerText = seconds;
// Ignore code above
}

setInterval(getTime, 1000);

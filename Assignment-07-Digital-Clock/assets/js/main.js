let hourDisplay = document.getElementById("hours");
let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");

// Ignore the code below, duplicated for styling purposes
let hourDisplay2 = document.getElementById("hours2");
let minutesDisplay2 = document.getElementById("minutes2");
let secondsDisplay2 = document.getElementById("seconds2");
// Ignore the code above

// This adds a bright effect to current day's text
let sun = document.getElementById('sun');
let mon = document.getElementById('mon');
let tue = document.getElementById('tue');
let wed = document.getElementById('wed');
let thu = document.getElementById('thu');
let fri = document.getElementById('fri');
let sat = document.getElementById('sat');

function getTime() {
  
  let date = new Date();
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milSeconds = date.getMilliseconds();


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
  }else{
   sat.style.color = "white"; 
  }
}
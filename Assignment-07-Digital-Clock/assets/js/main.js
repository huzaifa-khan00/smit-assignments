let display = document.getElementById('display');

function getTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milSeconds = date.getMilliseconds();

    if(hours == 0){
        hours = 12 +" AM";
    }
    if(hours > 1 && hours < 10){
        hours = "0" + hours;
    }
    if(minutes > 1 && minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds > 1 && seconds < 10){
        seconds = "0" + seconds;
    }
    if(hours > 0 && hours < 13){
        hours = hours + " AM";
    }
    if(hours > 12){
        hours = hours-12 + " PM"
    }
    
    display.innerText;
}

setInterval(getTime, .1);
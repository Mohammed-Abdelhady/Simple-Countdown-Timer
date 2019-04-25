
var seconds
     ,countDiv = document.getElementById('countdown')
     ,secondPass
     ,countdown;

seconds = prompt("enter time by seconds");
countdown = setInterval(function(){
    "use strict";

    secondPass();
}, 1000);

function secondPass(){
    "use strict";
    var minute = Math.floor(seconds / 60),
        remSeconds = seconds % 60;


    if(seconds < 10){
        remSeconds = "0" + remSeconds;
    }


    if(remSeconds < 10){
        remSeconds = "0" + remSeconds;
    }

    if(minute < 10){
        minute = "0" + minute;
    }
    countDiv.innerHTML = minute + " : " + remSeconds;

    if(seconds > 0){
        seconds--;
    }
    else{
        clearInterval(countdown)
        countDiv.innerHTML = "Done";
    }
}
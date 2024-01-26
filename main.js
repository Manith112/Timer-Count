
document.addEventListener("DOMContentLoaded", function () {
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const expired = document.querySelector(".timer");
const minuteFlip = document.getElementById("minute-flip")



// set countdown date 
const countdownDate = new Date ("Dec 31, 2024 00:00:00 UTC").getTime();

// UPDATE countdown every second 

const countdown = setInterval(function() {
   
    // get the current date and time 
    const now = new Date().getTime();

    // calculate the remaining time 
    const distance = countdownDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
      const hours = formatNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = formatNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      var seconds = formatNumber(Math.floor((distance % (1000 * 60)) / 1000));
    //   display the countdown timer 
    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;

 // If a new minute begins, apply the flip animation to the minutes element
 if (seconds === 0) {
    minuteFlip.classList.add("flip-animation")
} else {
    minuteFlip.classList.remove("flip-animation")
}


// if the countdown is over, display a message 
if (distance < 0){
    clearInterval(countdown)
expired.innerHTML = "EXPIRED";
}



function formatNumber(number) {
    return number < 10 ? "0" + number : number;
}



}, 1000);

})


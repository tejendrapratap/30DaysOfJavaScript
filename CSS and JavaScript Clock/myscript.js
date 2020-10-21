const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    // setting the seconds hand
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // setting the minute hand
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    // setting the hour hand
    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360 ) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    console.log(`${hours} hours : ${minutes} minutes : ${seconds} seconds`);
}

setInterval(setDate, 1000);

// selectionner les hands
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
    //definir les unites de temps
    const now = new Date();
    const seconds = now.getSeconds();
    const minut = now.getMinutes();
    const hour = now.getHours();

    //calculer les degres de rotation
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutDegrees = ((minut / 60) * 360) + 90;
    const hourDegrees = ((hour % 12) / 12) * 360 + 90 + (minut / 60) * 30;


    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;


}
setInterval(setTime, 1000);

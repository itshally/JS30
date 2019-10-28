const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setTime(){
     
     const time = new Date(),
          seconds = time.getSeconds(),
           minutes = time.getMinutes(),
           
           hours = time.getHours(),
           secondDeg = ((seconds / 60) * 360) + 90
           minuteDeg = ((minutes / 60) * 360) + 90,
           hourDeg = ((hours / 12) * 360) + 90;

    
     // second hand
     secondHand.style.transform = `rotate(${secondDeg}deg)`
     // console.log(secondDeg)
     // console.log(seconds)

     // minute hand
     minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
     // console.log(minutes)
     // console.log(minuteDeg)

      // hour hand
      hourHand.style.transform = `rotate(${hourDeg}deg)`
     //  console.log(hours)
      // console.log(hourDeg)
     
}

setInterval(setTime, 1000);
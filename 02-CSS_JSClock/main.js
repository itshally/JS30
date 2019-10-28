const hourHand = document.querySelector('.hour-hand'),
      minuteHand = document.querySelector('.min-hand'),
      secondHand = document.querySelector('.second-hand');

setTime = () => {
     
     // variables
     const time = new Date(),
           seconds = time.getSeconds(),
           minutes = time.getMinutes(),
           hours = time.getHours(),
           secondDeg = timeDeg(seconds, 60),
           minuteDeg = timeDeg(minutes, 60),
           hourDeg = timeDeg(hours, 12);

     // second hand
     handStyle(secondHand, secondDeg)

     // minute handg)
     handStyle(minuteHand, minuteDeg)

     // hour hand
     handStyle(hourHand, hourDeg)
}

setInterval(setTime, 1000);
const timeDeg = (hand, x) => ((hand / x) * 360) + 90,
      handStyle = (hand, deg) => hand.style.transform = `rotate(${deg}deg)`;

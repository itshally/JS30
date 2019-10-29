setInterval(() => {
     
     // variables
     const time = new Date(),
           hands = document.querySelector('.clock-face'),
           handPositions = [
               time.getHours() / 24,
               time.getMinutes() / 60,
               time.getSeconds() / 60
          ];

     handPositions.forEach((angle, index) => {
          hands.children[index].style.transform =  `rotate(${angle}turn)`
     })
     
}, 1000);
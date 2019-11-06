const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastCheck;

checkboxes.forEach( x => x.addEventListener('click', (e) => {
     
     let inBetween = false;

     if(e.shiftKey && x.checked){

          checkboxes.forEach(box => {
               if(box === x ||  box === lastCheck) inBetween = !inBetween;

               if(inBetween) box.checked = true;
          })
     }

     lastCheck = x;
}))
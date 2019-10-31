const panels = document.querySelectorAll('.panel');

panels.forEach(x => x.addEventListener('click', ()=>{
     x.classList.toggle('open')
}))

panels.forEach(x => x.addEventListener('transitionend', (e)=>{
     if(e.propertyName.includes('flex')){
          x.classList.toggle('open-active')
     }
}))

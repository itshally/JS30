document.querySelectorAll('.controls input')
        .forEach( key => {
                     key.addEventListener('pointermove', () => { 
                          const suffix = key.dataset.sizing || '';
                          document.documentElement.style.setProperty(`--${key.name}`, key.value + suffix)
                     });
          });
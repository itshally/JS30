var playing = document.querySelectorAll('.key');

window.addEventListener('keydown', function playSound(event) {
     const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
     const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
     
     if (!audio) return ;
     audio.currentTime = 0;
     audio.play();
     key.classList.add('playing');
});

playing.forEach(x => x.addEventListener('transitionend', function removeTransition(event) {
     if(event.propertyName !== 'transform') return;
     this.classList.remove('playing')
}));

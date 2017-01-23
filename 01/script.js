window.addEventListener('keydown', e => playSound(e.keyCode));

const keys = document.querySelectorAll('.keys__key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', (e) => {
    playSound(e.currentTarget.dataset.key);
  });
});

function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.keys__key[data-key="${keyCode}"]`);

  if (!audio) return;

  /**
   * Bonus: if hihat starts to play openhat sound will stop
  **/
  if (+keyCode === 83) {
    const openhatAudio = document.querySelector('audio[data-key="70"]');
    if (!openhatAudio.paused) {
      openhatAudio.pause();
    }
  }

  audio.currentTime = 0; // play from start
  audio.play();
  key.classList.add('keys__key--playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;

  this.classList.remove('keys__key--playing');
}

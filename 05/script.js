const panels = document.querySelectorAll('.panels__panel');
panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);
});

function toggleOpen() {
  this.classList.toggle('panels__panel--open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('panels__panel--open-active');
  }
}

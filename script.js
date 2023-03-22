let slider = document.querySelector('[type=range]');
let img = document.querySelector('img');

slider.addEventListener('input', e => {
  img.style.width = e.target.value + 'px';
})
let conteneur = document.getElementById('container');
let aDeplacer = document.getElementById('animate');

let pos = 0;
let timerId = null;

function myMove() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
  pos = 0;
  aDeplacer.style.left = '0px';

  let max = conteneur.clientWidth - aDeplacer.offsetWidth;

  timerId = setInterval(() => {
    if (pos >= max) {
      clearInterval(timerId);
      timerId = null;
    } else {
      pos++;
      aDeplacer.style.left = pos + 'px';
    }
  }, 1);
}

  
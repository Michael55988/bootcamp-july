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

  











//  exercice 1 




setTimeout(() => {
    alert('Hello World')
  }, 2000);
  
  
  setTimeout(() => {
    let monP = document.createElement('p')
    monP.innerText = 'ICI CEST PARIS' 
    monDiv = document.getElementById('container')
    monDiv.appendChild(monP)
  }, 2000);
  
  
  
  setInterval(() => {
    let monP = document.createElement('p')
    monP.innerText = 'ICI CEST PARIS' 
    monDiv = document.getElementById('container')
    monDiv.appendChild(monP)
  }, 2000);
  
  monDiv = document.getElementById('container')
  monDiv.innerHTML = ''
  document.getElementById('clear').onclick = ()=> {
    monDiv.innerHTML = ''
    console.log(monDiv)
  }
  
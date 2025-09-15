// //  exercice 1
// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)


const article = document.querySelector('article');
const h1 = article.firstElementChild;
console.log(h1);


const p = article.querySelectorAll('p');
const lastP = p[p.length -1];
lastP.remove();


const h2 = article.querySelector('h2');
h2.addEventListener('click', () => {
  h2.style.backgroundColor = 'red';
});


const h3 = article.querySelector('h3');
h3.addEventListener('click', () => {
  h3.style.display = 'none';
});



const bouton = document.createElement('button');
bouton.textContent = 'Mettre les paragraphes en gras';
document.body.insertBefore(bouton, article); 

bouton.addEventListener('click', () => {
  article.querySelectorAll('p').forEach(p => {
    p.style.fontWeight = 'bold';
  });
});



h1.addEventListener('mouseenter', () => {
    const size = Math.floor(Math.random() * 101); 
    h1.style.fontSize = (size || 16) + 'px';      
  });
  



//   exercice 2 
// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.



const form = document.querySelector('form');
console.log(form);

const input1 = document.getElementById('fname');
const input2 = document.getElementById('lname');
console.log(input1);
console.log(input2);

const name1 = document.getElementsByName('firstname')[0];
const name2 = document.getElementsByName('lastname')[0];
console.log(name1);
console.log(name2);


console.log('by NAME (qSA) -> firstname =', document.querySelectorAll('[name="firstname"]'));
    console.log('by NAME (qSA) -> lastname =', document.querySelectorAll('[name="lastname"]'));

    const answersList = document.querySelector('ul.usersAnswer');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      input1.classList.remove('error');
      input2.classList.remove('error');

      const first = input1.value.trim();
      const last  = input2.value.trim();

      let hasError = false;
      if (first === '') { input1.classList.add('error'); hasError = true; }
      if (last  === '') { input2.classList.add('error');  hasError = true; }
      if (hasError) {
        console.warn('Veuillez remplir tous les champs.');
        return; 
      }

      answersList.innerHTML = '';

      const liFirst = document.createElement('li');
      liFirst.textContent = `First name: ${first}`;
      answersList.appendChild(liFirst);

      const liLast = document.createElement('li');
      liLast.textContent = `Last name: ${last}`;
      answersList.appendChild(liLast);

      console.log('Submitted values =>', { first, last });
    });





 

// In the JS file:

// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example



let allBoldItems = [];

function getBoldItems() {
  const paragraph = document.getElementById('text');
  allBoldItems = Array.from(paragraph.querySelectorAll('strong'));
}

function highlight() {
  allBoldItems.forEach(el => el.style.color = 'blue');
}

function returnItemsToDefault() {
  allBoldItems.forEach(el => el.style.color = 'black');
}

getBoldItems();

const paragraph = document.getElementById('text');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);




// exercice 4

let formulaire = document.getElementById('MyForm')
formulaire.onsubmit = (e) => {
  e.preventDefault()
  let input_radiius = formulaire.getElementsByTagName('input')[0].value
  console.log(input_radiius)
 // 4/3× π×r³
 let reponse = (4/3 *  Math.PI*(input_radiius^3))

 console.log(reponse)
 
 //selectionee ce que jai rentrer dans le 2eme input
 formulaire.getElementsByTagName('input')[1].value = reponse



}







//  exercice xp animation

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.



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

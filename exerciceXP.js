// exercice1


let bouton = document.getElementById('boutton')
bouton.onclick = async ()=>{
    let texte = document.getElementById('input').value
    console.log(texte);
    let url = 'https://api.giphy.com/v1/gifs/search?q='+texte+'&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
   let resultat = await fetch(url)
   resultat = await resultat.json()
   console.log(resultat.data);

   let tableau = []
   for(i in resultat.data)
    tableau.push(resultat.data[i].url)
console.log(tableau)
} 



// exercice 2



let bouton = document.getElementById('boutton')
bouton.onclick = async ()=>{
    let texte = document.getElementById('input').value
    console.log(texte);
    let url = 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10'
   let resultat = await fetch(url)
   resultat = await resultat.json()
   console.log(resultat.data);

   let tableau = []
   for(i in resultat.data)
    tableau.push(resultat.data[i].url)
console.log(tableau)
} 





// exercice 3



async function getStarship() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
  
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log(data.result);
    } catch (error) {
      console.error("Une erreur est survenue :", error.message);
    }
  }
  
  
  getStarship();




// exercice 4

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//  the result will be 
//  the word 'calling' will appear and 2 seconds after the word ' resolved' will appear
const btn = document.getElementById('getCharacter');
const loader = document.querySelector('.loader');
const info = document.getElementById('characterInfo');

btn.addEventListener('click', getRandomCharacter);

async function getRandomCharacter() {
  info.innerHTML = '';
  loader.style.display = 'block';
  
  try {
    const randomId = Math.floor(Math.random() * 83) + 1;
    console.log(`Fetching character ID: ${randomId}`);

    const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    const data = await response.json();

    const character = data.result.properties;
    const homeworldResponse = await fetch(character.homeworld);
    const homeworldData = await homeworldResponse.json();

    loader.style.display = 'none';

    info.innerHTML = `
      <h2>${character.name}</h2>
      <p><strong>Height:</strong> ${character.height} cm</p>
      <p><strong>Gender:</strong> ${character.gender}</p>
      <p><strong>Birth Year:</strong> ${character.birth_year}</p>
      <p><strong>Home World:</strong> ${homeworldData.result.properties.name}</p>
    `;
  } catch (error) {
    loader.style.display = 'none';
    info.innerHTML = `<p style="color:red;">Error fetching data. Please try again.</p>`;
    console.error(error);
  }
}

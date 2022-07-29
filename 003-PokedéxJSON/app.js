let resultContainer = document.getElementById('result-container');
let searchInput = document.getElementById('search-input');
let listResults = document.getElementById('list-results');

//Trae los resultados de pokeapi.js con la constante poke_file que se introduce en los parentesis de json.parse()
let pokemon = JSON.parse(poke_file).result;

//funcion search de evento oninput 
const search = () => {
  let characters = search_character(searchInput.value.toLowerCase());
 
  listResults.innerHTML = '';
  let results = '';
 
  for (i = 0; i < characters.length; i++) {
    
    let element = `
  <img src=${characters[i].ThumbnailImage}>
  <h2>${characters[i].number} ${characters[i].name}</h2>
  <ul>
  <li>Size: ${characters[i].height}</li>
  <li>Weight: ${characters[i].weight}</li>
  <li>Type: ${characters[i].type}</li>
  <li>Abilities: ${characters[i].abilities}</li>
  <li>Weakness: ${characters[i].weakness}</li>
  </ul>
  `;

    results +=  element;
  }
  listResults.innerHTML = `${results}`;
  
}


let arrayMatch = [];
const search_character = characterName => {
  arrayMatch = [];
  for (let i = 0; i < pokemon.length; i++) {

    if (characterName == pokemon[i].slug.substring(0, characterName.length)) {

      arrayMatch.push(pokemon[i]);

    }
  }
  return arrayMatch


}
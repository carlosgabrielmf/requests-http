/**
 * @returns {Object} character infomration
 */

/** 
 * Se crea una funcion asincrona que contenta la respuesta y el formato de la respuesta en esta caso json
 * await indica que hay que esperar un tiempo por la peticion
 * fetch indica que se esta buscando informacion en el enlace indicado
*/
const fetchCharacter = async() => {
    const res = await fetch("https://rickandmortyapi.com/api/character/1");
    const data = await res.json();

    console.log(data);
    return data;
    
}


/**
 * @param {HTMLDivElement} element
 */

//Se crea el componente dedicado a renderizar la informacion de la API en el frontend
export const RickandmortyApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'Rick and Morty App'

    element.innerHTML = 'Loading...'
    
    // const character = await fetchCharacter();

    const nameCharacter = document.createElement('h1');
    const statusCharacter = document.createElement('h3');
    const speciesCharacter = document.createElement('h3');
    const buttonNextCharacter = document.createElement('button');
    buttonNextCharacter.innerText = "Next Character";

    const renderCharacter = (data) => {
        nameCharacter.innerHTML = data.name;
        statusCharacter.innerHTML = data.status;
        speciesCharacter.innerHTML = data.species;

        element.replaceChildren(nameCharacter, statusCharacter, speciesCharacter, buttonNextCharacter)
    }

    fetchCharacter().
    then((data) => renderCharacter(data));
        
}
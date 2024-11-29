/**
 * @returns {Object} character infomration
 */

/** 
 * Se crea una funcion asincrona que contenta la respuesta y el formato de la respuesta en esta caso json
 * await indica que hay que esperar un tiempo por la peticion
 * fetch indica que se esta buscando informacion en el enlace indicado
*/

const fetchCharacter = async(id = 1) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();

    console.log(data);
    return data;
    
}


//Se crea el componente dedicado a renderizar la informacion de la API en el frontend
/**
 * @param {HTMLDivElement} element
 */

export const RickandmortyApp = async (element) => {

    // Esta variable almacena el id que vamos a utilizar luego para incrementar el button
    let currentCharacterId = 1;

    //Aqui se selecciona el elemento del DOM que vamos a utilizar
    document.querySelector('#app-title').innerHTML = 'Rick and Morty App'


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

    //Damos funcionalidad al boton de next
    buttonNextCharacter.addEventListener('click', async () => {
        element.innerHTML = 'Loading...';
        currentCharacterId ++; // Se incrementa el ID
        const newCharacter = await fetchCharacter(currentCharacterId); // Se obtiene el nuevo personaje
        renderCharacter(newCharacter); // se actualiza la vista
    });
    


    fetchCharacter().
    then((data) => renderCharacter(data));
        
}
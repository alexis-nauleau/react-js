//const {sleep} = require("../exercices/10_promise");
 
/**
* Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
* vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
*
* Vous devez utiliser .then
*
* contrainte:
*    - votre fonction doit être synchrone et ne pas retourner de Promise
*    - ne pas utiliser async await
*
*/
 
const { sleep } = require("./10_promise");
 
const usingThen = (cb) => {

    sleep(2000).then(cb);
    
};
 
/**
* Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
* vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
*
* Vous devez utiliser await
*
* contrainte:
*   - votre fonction doit être asynchrone et retourner une Promise
*   - ne pas utiliser .then
*/
 
 
 
 
const usingAwait = async (cb) => {
    // Attendez que la promesse de sleep soit résolue
    
    await sleep(2000);
    // Exécutez le callback après le délai
    cb();
    
}
 
/**
* Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
* retourne le résultat de la requête (body)
*
* Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
* npm install axios
*
* votre réponse doit être un objet json
*
* url de test: https://jsonplaceholder.typicode.com/todos/1
*/
 
//décommentez la ligne suivante une fois le package installé
//const axios = require("axios");
 
const axios = require("axios"); // installer axios ensuite on y fait apple ^^
/**
*
* @param {string} url
* @returns {Promise<object>}
*/
const apiResponse = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
module.exports = {usingThen, usingAwait, apiResponse};
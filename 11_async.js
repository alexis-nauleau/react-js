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

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const usingThen = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const synchrone = (ms)=> {
    console.log("début");
    sleep(2000).then(() => console.log("fin"));
    
}
synchrone();

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


const usingAwait = async(cb)=> {
    console.log("début");
    await sleep(2000);
    cb();
    console.log("fin");
}
usingAwait();


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



const axios = require("axios");

const apiResponse = async (url) => {
  console.log("start");
  const promise = axios.get("https://jsonplaceholder.typicode.com/todos/1");
  console.log(promise);
  
  promise.then((res) => {
    console.log("then", res.data);
  })
  console.log("end");
}

console.log("start thread");
synchrone();
console.log("end thread");


module.exports = {usingThen, usingAwait, apiResponse};
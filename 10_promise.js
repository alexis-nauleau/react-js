
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const asynchrone = async()=> {
    console.log("début");
    await sleep(2000);
    console.log("fin");
}
asynchrone();

    


module.exports = {sleep};
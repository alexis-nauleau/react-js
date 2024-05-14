
/**
 * utilisez la décomposition pour extraire la premiere et la 2e case du tableau
 * retournez les dans un nouveau tableau
 * 
 * exemple:  => [1, 2]
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte: 
 *  - interdiction d'utiliser [0] et [1]
 *  - interdiction d'utiliser slice ou splice
 */

const test=[1, 2, 3];

const extractFirstTwo = (array) => {
    const [first, second, ...restArray] = array;
    return restArray;
}
console.log(extractFirstTwo(test));



/**
 * utilisez la décomposition pour extraire la premiere case du tableau et le reste du tableau
 * retournez uniquement le reste du tableau
 * 
 * exemple: [1, 2, 3] => [2, 3]
 */
const tests=[1, 2, 3];
// const[txo,...rest]= tests;
// console.log(rest);

const extractRest=(blop)=>{
    const [prems, ...ilrest] = blop;
    return ilrest;
}
console.log(extractRest(tests));
/**
 * utilisez la décomposition pour extraire le champ "name" de l'objet passé en paramètre
 * retournez le champ "name"
 * 
 * exemple: {name: "toto", age: 42} => "toto"
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte:
 * - interdiction d'utiliser l'opérateur "." pour accéder au champ "name"
 */
const personnage = {
    name: "ezio",
    attaque: 100,
    defense: 80
  };

  const {attaque, defense,...restObj} = personnage;
  
  console.log(restObj);



/**
 * utilisez la décomposition pour retourner l'objet utilisateur sans le champ "password"
 * 
 * exemple: {name: "toto", password: "1234"}
 * 
 * contrainte: 
 *    - interdiction d'utiliser "delete"
 *    - interdiction d'utiliser l'opérateur "." pour accéder au champ "password"
 * 
 */
const utilisateur={name: "alexis", password: "1234"}
const removePassword = (array) => {
    const {password, ...restPass} = array;
    return restPass;
};

console.log(removePassword(utilisateur));



module.exports = {extractFirstTwo, extractRest, extractName, removePassword}

/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

const multiplyByTwo = [1,2,3,4];
const mapping =  multiplyByTwo.map(a=>a*2) // pour chaque élément du tableau
console.log(mapping);


/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const tabW = ["alexis","je","maison","toi","arbre"];
const filterNameStartByA =tabW=>tabW.filter(x=>x.startsWith("a"))

//const sum = array => array.reduce((add, val) => add + val, 0);

console.log(filterNameStartByA(tabW));

/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */
const array = [1, 2, 3, 4,10];
//

const sum = array => array.reduce((add, val) => add + val, 0);

console.log(sum(array));

/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */
const findUserById = (users, id) => users.find(user => user.id === id).name;

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Doe'},
    {id: 3, name: 'Foo'},
    {id: 4, name: 'Bar'},
];

console.log(findUserById(users, 3)); 


const arrat=[1,2,3,4,5]
arrat.forEach(e => {
  console.console.log((e));
});


const ukers = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Alice' },
  { id: 4, name: 'Bob' },
  { id: 5, name: 'Eve' },
];

console.log(ukers.find(e => e.id === 2));


module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};

// aller voir la fonction .sort
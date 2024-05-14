/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 tableaux passés en paramètres
 * 
 * ex:,[1, 2, 3] [4, 5, 6] => [1, 2, 3, 4, 5, 6]
 * 
 * contrainte: 
 *  - ne pas utiliser la méthode concat, map, merge, push les fonctions modifient le tableau  donc peu utilisés
 *  - for, foreach, while, do while sont interdits
 * SPREAD OPERATOR
 */
const arr1= [1, 2, 3]; 
const arr2=[4, 5, 6];
const concat =(a,b)=>[...a, ...b]; // le ... fait disparaitre les [] de la valeur qu'on injecte
console.log(concat(arr1,arr2));



/**
 * utiliser l'opérateur de composition ... afin d'ajouter un élément à un tableau
 * 
 * ex: [1, 2, 3], 4 => [1, 2, 3, 4]
 * 
 * contrainte:
 * - ne pas utiliser la méthode push
 */
const arr3= [1, 2, 3]; 
const valueToPush = 7;
const push =(c,d)=> [...c, d];
console.log(push(arr3, valueToPush ));

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const valueToPush = 7;

// const res = [...array1, valueToPush, ...array2, ];
// console.log(res);
// console.log(array1);

/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 objets passés en paramètres
 * 
 * ex: {a: 1, b: 2}, {c: 3, d: 4} => {a: 1, b: 2, c: 3, d: 4}
 */
tab={a: 1, b: 2};
tabB={c: 3, d: 4}
const merge = (tab, tabB)=>({...tab,...tabB});
console.log(merge(tab, tabB));
 

/**
 * utiliser l'opérateur de composition ... afin de modifier la propriété name de l'objet
 * 
 * ex: {name: 'toto'}, 'titi' => {name: 'titi'}
 * 
 * contrainte:
 *  - interdiction d'utiliser l'opérateur d'affectation "="
 */

const user= {name: "toto"};
 
const setName = (user)=>({...user,name:"raoul"}); 
console.log(setName(user));


const obj1 = {
    tenue: "ezio",
    attaque: 100,
    defense: 80
  };
  const obj2 = {
    tenue: "altair",
    attaque: 90,
    defense: 100
  };
  
  const obj3 = {...obj1, defense: obj2.defense};
  console.log(obj3);

// astuce: {...obj} crée une copie de l'objet, c'est un des principes de l'immutabilité et évite les problèmes de référence
module.exports = {concat, push, merge, setName}
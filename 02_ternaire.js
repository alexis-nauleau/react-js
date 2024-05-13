
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    return (a>b)? "x est plus grand":"y est plus grand";
}

console.log(ternaire(50, 2));



module.exports = ternaire;

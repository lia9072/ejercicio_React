import heroes  from "../data/heroes"; // importar

/* ----------hay varias para se exportaciones y exportaciones por defecto ----------- */


const getmo = (id) => heroes.find( (heroe) => heroe.id === id) // find solo te regresa uno elemento
/* console.log( getmo(4) )  */

export default getmo;

const getmo1 = (ower) => heroes.filter( (heroe)  => heroe.owner === ower)  // este te va delvolver todos que tengan 'DC'  o 'Marvel'

/* console.log( getmo1( 'Marvel' )) */
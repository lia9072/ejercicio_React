import React from 'react'
import PropTypes from 'prop-types' //tipos de prototipos
//FC 
const PrimeraApp = ({ saludo, defecto }) =>{
  
     const numero = [1,23,4,5,5,66,6,7]
  /*    const objetos = {
         nombre: 'lia',
         enemorado:'no tiene',
         edad: 18
     } */
/* 
     if(!saludo){
         throw new Error('es necesaario')
     }else{
         console.warn('esta bei');
     } // esta es la forma de saber si existe o no
 */

    return (


        <>
            <p>{ numero }</p>
            <h2>{ saludo } </h2>
            <p>{ defecto }</p>
            {/* <pre>{ JSON.stringify( objetos, null, 3) }</pre> */}
            <h1>hola mundo</h1>
            <p>lofdjsd fdgfn</p>
        </>
    )

}
//los booleanos no lo imprime 
//un objeto no se puede imprimer
//los props: son  propiedades enviadas del padre hacia el componete hijo
//<pre>{ JSON.stringify( objetos, null, 3) }</pre>


PrimeraApp.propTypes ={
    //saludo:PropTypes.string// se imprime solo estring pero no es obligatorio que tes con valor 
    saludo:PropTypes.string.isRequired // el espacio no puede ir vacio 
}

// valor por defecto 
PrimeraApp.defaultProps ={
    defecto:' soy un valor por defecto por otra manera '
}

export default PrimeraApp;
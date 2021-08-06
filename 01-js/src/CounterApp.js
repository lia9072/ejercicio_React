import React, {useState} from 'react';
import PropTypes from 'prop-types'

const CounterApp = ( { value }) =>{

    const usestate = useState('lia')
     const holi = (e) =>{
        console.log(e)
     }
    return (
        <>
         <h1> CounterApp </h1>
         <h2>{ value }</h2>
         <h2> jiusdfn uidfdng </h2>
         <button onClick = { holi }> + 1</button>{/* holi() != holi porque la primer retorna una funcion y el segundo no retorna una funcion  */}
        </>
    )

}

CounterApp.propTypes ={
    value:PropTypes.number
}

export default CounterApp;
//hook  son funciones 
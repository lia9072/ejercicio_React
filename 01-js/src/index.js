import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css'
import CounterApp from './CounterApp';


//const saludo = <h1>hola como estas </h1>;
const divRoot = document.querySelector('#root');

ReactDom.render( <CounterApp value ={ 10} />, divRoot)
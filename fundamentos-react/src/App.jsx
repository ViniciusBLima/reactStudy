import React from 'react';

import Primeiro from './components/basicos/PrimeiroComponente'
import Teste from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';

//POSSO PASSAR UMA FUNÇÃO ANONIMA, OU ARROW FUNCTION, OU ATÉ MESMO UMA FUNÇÃO SEM PARAMETROS NENHUM

export default (props) => {
    return (
        <div>
            <Aleatorio min={1} max={100}></Aleatorio>
            <Teste titulo="titulo teste prop" subtitulo="subtitulo teste prop"></Teste>
            <Primeiro></Primeiro>
        </div>
    )
}
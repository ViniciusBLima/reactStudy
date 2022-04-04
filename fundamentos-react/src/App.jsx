import React from 'react';

import Primeiro from './components/basicos/PrimeiroComponente'
import Teste from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/basicos/Card';
import Familia from './components/basicos/Familia';
import MembroFamilia from './components/basicos/MembroFamilia';
import ListaAlunos from './components/repeticao/ListaAlunos';
import ListaProdutos from './components/repeticao/ListaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';

//POSSO PASSAR UMA FUNÇÃO ANONIMA, OU ARROW FUNCTION, OU ATÉ MESMO UMA FUNÇÃO SEM PARAMETROS NENHUM

export default (props) => {
    return (
        <div className='App'>
            <div className="CardHolder">
                <Card titulo="#7 Redenrização condicional" color="#858264">
                    <ParOuImpar numero="11"/>
                </Card>
                
                <Card titulo="#6 Desafio de repetição com produtos" color="#3656db">
                    <ListaProdutos/>
                </Card>

                <Card titulo="#5 Repetição" color="#ff8924">
                    <ListaAlunos/>
                </Card>

                <Card titulo="#4 Familia" color="#004488">
                    <Familia sobrenome="Ferreira">
                        <MembroFamilia nome="Pedro"/>
                        <MembroFamilia nome="Vinicius"/>
                        <MembroFamilia nome="Gustavo"/>
                    </Familia>
                </Card>

                <Card titulo="#3 Desafio Aleatório" color="#588744">
                    <Aleatorio min={1} max={100}/>
                </Card>

                <Card titulo="#2 Primeiro componente com props" color="#E0DC71">
                    <Teste titulo="titulo teste prop" subtitulo="subtitulo teste prop"/>
                </Card>
                
                <Card titulo="#1 Primeiro componente" color="#9C5E99">
                    <Primeiro/>
                </Card>
                
                
            </div>
        </div>    )
}
import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";
import Condicao from "../condicional/If";

export default function IndiretaPai(props){

    var [pai, setPai] = useState({})

    //useState, deixa o calor flexivel conforme ocorra alterações.

    function ReceberInfo(nome, idade, esperto){
        //utilizo o setPai para alterar o valor de pai
        setPai({ nome: nome, idade: idade, esperto: esperto })

    }


    return(
        <div>
            <Condicao cond={pai.nome}>
                <span>{pai.nome} </span>
                <span><strong>{pai.idade} </strong></span>
                <span> {pai.esperto? "Esperto": "Burro"}</span>
            </Condicao>
            
            <Condicao cond={!pai.nome}>
                <span>Você não tem pai?</span>
            </Condicao>

            <IndiretaFilho click={ReceberInfo}/>
        </div>
    )
}
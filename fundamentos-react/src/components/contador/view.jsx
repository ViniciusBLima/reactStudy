import React, { useState } from "react";
import Input from "./input";
import Botao from "./botao";

export default props =>{

    var [valor, setValor] = useState(props.valor? props.valor: 0);
    var [passo, setPasso] = useState(props.passo? props.passo : 5);

    function ReceberPasso(passo){
        console.log(passo.target.value)
        setPasso(passo.target.value)
    }

    function dec(){
        console.log('dec')
        setValor(valor = valor - passo)
    }

    function som(){
        console.log('som')
        setValor(valor + +passo)
    }


    return(
        <div>
            <h2>Contador</h2>
            <span>{valor}</span>
            <Input valor={passo} callBack={ReceberPasso}/><br/>
            <Botao passo={passo} valor={valor} som={som} sub={dec}/>
        </div>
    )
}
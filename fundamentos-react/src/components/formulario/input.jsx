import React, { useState } from "react";

export default function Input(props){

    var [nome, setNome] = useState('')

    function changeValue(e){
        console.log(e)
        setNome(e.target.value)
    }

    return(
        <div>
            <h1>Input</h1>
            <span>Seu nome é: <strong>{nome}</strong></span><br></br>
            <input value={nome} onChange={changeValue}/>
        </div>
    )
}
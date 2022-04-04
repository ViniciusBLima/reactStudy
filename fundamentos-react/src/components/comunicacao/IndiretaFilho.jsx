import React from "react";


export default function IndiretaFilho(props){
    return(
        <div>
            <div>
                Indireta Filho
            </div>
            <button onClick={_=>{props.click("Edson", 20, true)}}>Gerar Pai</button>
        </div>
    )
}
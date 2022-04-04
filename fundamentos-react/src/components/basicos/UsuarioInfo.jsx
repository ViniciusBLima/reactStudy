import React from "react";
import Condicao from "../condicional/If";

export default function UserInfo(props){

    var usuario = props

    return(
        <div>
            <Condicao cond={usuario.nome}>
                <h4>Seja bem vindo <strong>{usuario.nome}</strong></h4>
            </Condicao>

            <Condicao cond={!usuario.nome}>
                <h4>Seja bem vindo <strong>Novo Usuario</strong></h4>
            </Condicao>

            
        </div>
    )
}

import React from "react";
import alunos from '../../data/aluno'

export default (props) =>{

    var listaAlunos = alunos.map((aluno)=>{
        //Utilizar o key para facilitar o react encontrar e alterar o layout caso o valor seja modificado
        //posteriormente, não é obrigatorio porém pode gerar erro no console.
        return <li key={aluno.id}>{aluno.id}: {aluno.nome} Nota: {aluno.nota}</li>
    });

    return (
        <div>
            <ul>
               {listaAlunos}
            </ul>
        </div>
    )
}
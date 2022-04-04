import React from "react";
import DiretaFilho from "./DiretaFilho";

export default function DiretaPai(){
    return(
        <div>
            <DiretaFilho nome="Alexandre" idade={10} esperto={false}/>
            <DiretaFilho nome="Bruno" idade={16} esperto={true}/>
            <DiretaFilho nome="Renan" idade={4} esperto={false}/>
        </div>
    )
}
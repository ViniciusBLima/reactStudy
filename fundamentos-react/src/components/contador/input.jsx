import React from "react";

export default props =>{

    return(
        <div>
            <input value={props.valor} onChange={props.callBack} type='number'/>
        </div>
    )
}
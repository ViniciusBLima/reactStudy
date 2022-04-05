import React, { useState } from "react";

export default props => {

    var [qntdNumeros, setQntdNumeros] = useState(0)
    var [sorteioMega, setSorteioMega] = useState([])

    function sortfunction(a, b) {
        return (a - b)
    }

    function SorteioMega() {

        sorteioMega = []

        for (var i = 0; i < qntdNumeros; i++) {

            var sorteado = Math.floor(Math.random() * (100 - 1 + 1) + 1)
            if (sorteioMega.includes(sorteado)) {
                qntdNumeros++
            }
            else {
                sorteioMega.push(sorteado)
                setSorteioMega([sorteioMega.sort(sortfunction).join()])
            }
        }
    }

    function AlterarQuantidadeNumero(e) {
        setQntdNumeros(e.target.value)
    }

    return (
        <div>
            <h1>MEGA-SENA</h1>
            <label>Numeros para serem gerados:</label><br />
            <input value={qntdNumeros} onChange={AlterarQuantidadeNumero} type='number' min="1" max="100" /><br />
            <button onClick={SorteioMega}>Sortear númeors</button>
            <strong><h2>{sorteioMega}</h2></strong>
        </div>
    )
}
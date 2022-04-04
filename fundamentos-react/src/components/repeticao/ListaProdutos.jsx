import React from "react"
import produtos from "../../data/produtos"
import '../../layout/ListaProdutos.css'

var produtosInfo = produtos.map((produto)=>{
    return <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
            </tr>
});

export default function ListaProdutos(props){
    return(
    <table className="produtos">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Preço</th>
            </tr>
        </thead>
        <tbody>
            {produtosInfo}
        </tbody>
    </table>)
}
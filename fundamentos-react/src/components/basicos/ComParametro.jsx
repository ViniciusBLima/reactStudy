//Sempre utilizar props (propriedades)
//As propriedades são somendo para leitura, não podem ser alteradas. 
//(props.titulo = teste) = ERRADO

export default function Teste(props){
    return (<div>
        <h2>{props.titulo}</h2>
        <h3>{props.subtitulo}</h3>
    </div>)
}
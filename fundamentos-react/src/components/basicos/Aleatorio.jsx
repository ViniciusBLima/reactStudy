export default (props)=>{

    var aleatorio = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
    
    return(
        <div>
            <h1>Número aleatorio</h1>
            <p>O seu número aleatorio entre {props.min} e {props.max} é: {aleatorio}</p>
        </div>
    )
}
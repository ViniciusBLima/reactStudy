export default (props)=>{

    var isPar = props.numero % 2 === 0

    return(
        <div>
            {
            isPar?
                <span><strong>Par</strong></span>
                    : 
                <span><strong>Impar</strong></span>
            }
        </div>
    )
}
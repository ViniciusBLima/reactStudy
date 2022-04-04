export default function Condicao(props) {

    if(props.cond){
        return props.children
    }
    else{
        return false
    }
}
interface propsInput {
    type: string
    value: any
    class: any
    nome: string
    placeholder: any
    onChange: any
}

export default function InputAntigo(props: propsInput){
   return(
    <input className={props.class} 
    aria-placeholder={props.placeholder} 
    type={props.type} name={props.nome} 
    placeholder={props.nome} step="0.01" 
    value={props.value} 
    onChange={props.onChange} />
    )
}

//  
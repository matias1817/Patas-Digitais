import ItemCarrinho from "@/app/model/ItemCarrinho"
import Produto from "@/app/model/Produto"



export default function Carrinho(props: ItemCarrinho){
    

    return (
        <div className={`
            flex items-center gap-2 rounded-full bg-blue-500 
        `}>
            <span className={`
                flex justify-center items-center
                w-8 h-7 rounded-full p-3 bg-blue-700
            `}>
                {props.quantidade}
            </span>
            <span>
                {props.produto.nome}
            </span> 
            <span className="pr-5">
               {props.produto.preco * props.quantidade}
            </span>
        </div>
    )
}
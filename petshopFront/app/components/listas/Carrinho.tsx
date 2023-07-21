import { IconCircleX } from "@tabler/icons-react";
import CarrinhoItem  from "./CarrinhoItem"
import CarrinhoVazio from "./CarrinhoVazio";
import ItemCarrinho from "@/app/model/ItemCarrinho";


interface Carrinhoprops{
    itens: ItemCarrinho[],
    salvarCarrinho: (item: ItemCarrinho[]) => void
}

export default function Carrinho(props: Carrinhoprops){
    const total = props.itens.reduce((soma, item) => {
        return soma + item.quantidade * item.produto.preco}, 0)
    

    return(
        <div className="flex flex-col border border-white rounded overflow-hidden w-full m-4">
            <div className={`flex justify-between items-center 
                bg-zinc-400 text-3xl p-3 font-bold text-green-800"
            `}>
                <span>Carrinho</span>
                <span>{total}</span>
            </div>
            <div className="flex gap-5 p-5 flex-wrap">
                {props.itens.length === 0 ? (
                    <CarrinhoVazio />
                ) : (
                    props.itens.map((item, i) => {
                        return <CarrinhoItem key={i} {...item} />
                    })
                )}
            </div>
            <button type="button" onClick={()=>props.salvarCarrinho(props.itens)} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">COMPRAR</button>

        </div>
    )
}
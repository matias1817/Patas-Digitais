import Image from 'next/image'
import { produtos } from './produtos'

interface ProdutoItemProps {
    produto: produtos
    //comprar: (Produtos: produtos) => void
}



export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    return (
        <div
            className={`
            flex flex-col rounded-md 
            border border-zinc-600
            p-1     
                `}
        >
           
            <div className="flex flex-col p-3 gap-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-black">{produto.nome}</div> <br />
                    <div className="text-green-500 font-bold">{produto.preco}</div>
                </div>
                <div>
                    <div className="flex flex-col text-gray-500">{produto.descricao}</div>
                </div>
                <div>
                    <button className="waves-effect waves-light btn"
                     //onClick={() => props.comprar(produto)}
                     >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}


import Produto from "@/app/model/Produto"
import ProdutoItem from "./ProdutoItem"
import { produtos } from "../produtos"


interface ListaProdutosProps {
    produtos:  Produto[]
    adicionarCar: (produto: Produto) => void
    removerCar: (produto: Produto) => void
    
}

export default function ListaProdutos(props: ListaProdutosProps) {
    return (
        <div className="flex flex-wrap gap-5 justify-center">
            {props.produtos.map(produto => {
                return (
                    <ProdutoItem key={produto.id} produto={produto} 
                    adicionarCar={props.adicionarCar} 
                    removerCar={props.removerCar}
                    />
                )
            })}
        </div>
    )
}
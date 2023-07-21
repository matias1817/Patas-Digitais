import Produto from "@/app/model/Produto";
import { IconPencil, IconShoppingCart, IconTrash } from "@tabler/icons-react";
import axios, { AxiosResponse } from "axios";

import Image from 'next/image'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


interface ProdutoItemProps {
    produto: Produto
    adicionarCar: (produto: Produto) => void
    removerCar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const Router = useRouter();
    const { produto } = props
    function deleta() {
        const url = 'http://localhost:3001/produto/' + localStorage.getItem('idProduto')
        axios.delete(url)
            .then((function (response: AxiosResponse) {
                localStorage.clear()
                window.location.reload()
                Router.push("/home")
                localStorage.setItem('admminId', '1')
            }))
    }
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const adminId = localStorage.getItem("admminId");
        setIsAdmin(adminId ? true : false);
    }, []);

    return (
        <div className={`
            flex flex-col rounded-md 
            border border-zinc-600
            p-1
        `}>
            <Image
                src={props.produto.imagem}
                width={210} height={200}
                alt="Imagem do Produto"
                className='rounded-md'
            />
            <div className="flex flex-col p-3 gap-3">
                <div className="flex justify-between items-center">
                    <div className="font-black text-sm">{produto.nome}</div>
                    <div className="text-green-700 font-semibold">{produto.preco}</div>
                </div>
                <div>
                    <div className="text-gray-800 text-bold text-sm">{produto.descricao}</div>
                </div>
                            
                <div className="flex flex-col gap-1">
                                {
                                    isAdmin ?
                                    
                                    <><button className={`bg-yellow-400 p-1 rounded-md 
                                    flex flex-row justify-center`}
                                onClick={() => {

                                    localStorage.setItem("idProduto", produto.id.toString());
                                    Router.push(`/edicaoProduto`);
                                } }>
                                <IconPencil />
                                Editar
                            </button><button className={`bg-red-400 p-1 rounded-md 
                                    flex flex-row justify-center`}
                                onClick={() => {

                                    localStorage.setItem("idProduto", produto.id.toString());
                                    deleta();
                                } }>
                                    <IconTrash />
                                    Deletar
                                </button></>
                                :
                                <><button className={`bg-green-400 p-1 rounded-md 
                                    flex flex-row justify-center gap-1`}
                                onClick={() => props.adicionarCar(produto)}>
                                <IconShoppingCart />
                                Adc
                            </button><button className={`bg-yellow-400 p-1 rounded-md 
                                    flex flex-row justify-center`}
                                onClick={() => props.removerCar(produto)}>
                                    <IconShoppingCart />
                                    Remv
                                </button></>


                                }

                                    
                                    
                                </div>
            </div>
        </div>
    )
}
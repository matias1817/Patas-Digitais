'use client'

const axios = require('axios');

import React from "react";

import { useState } from "react"
import Input from "./Input"
import { useRouter } from "next/navigation";
import '../../public/lib/materialize/css/materialize.css'
import { AxiosResponse } from "axios";
import ProdutoItem from "./listaProdutos";

export interface produtos {
    id: number,
    nome: '',
    descricao: '',
    categoria: '',
    codigo: '',
    preco: number
}

export default function Produtos(){
  
    const [produtosLista, setProdutosLista] = useState<produtos[]>([]);

    React.useEffect(() => {
        axios.get('http://localhost:3001/produto')
        .then((function (response:AxiosResponse)  {
        console.log(response.data)
        setProdutosLista(response.data);
      }));
    }, []);   




    return(
        <div className="flex justify-center flex-row gap-5 ">
            <ul>
            {produtosLista.map(produto => {
                
                return <ProdutoItem key={produto.id} produto={produto} 
                //comprar={produtosLista}
                />
                // <li key={user.id}>

                //     <span>{user.nome}</span>
                // </li>
})}
            </ul>
        </div> 
    )
   
     
}
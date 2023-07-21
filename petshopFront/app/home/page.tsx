'use client'

import { useState } from "react";
import ProdutoItem from "../components/listaProdutos";
import Carrinho from "../components/listas/Carrinho";
import ListaProdutos from "../components/listas/ListaProdutos";
import Navbar from "../components/navbar";
import Produtos from "../components/produtos";
import Produto from "../model/Produto";
import React from "react";
import Input from "../components/Input"
import { useRouter } from "next/navigation";
import '../../public/lib/materialize/css/materialize.css'
import axios, { AxiosResponse } from "axios";
import ItemCarrinho from "../model/ItemCarrinho";
import Footer from "../components/footer";
import router from "next/router";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';



export default function Home() {

  


  const [produtosState, setProdutosState] = useState<Produto[]>([])
  const [itens, setItens] = useState<ItemCarrinho[]>([])
  const [ProdEdicState, SetProdEDicState] = useState<Produto>()
  

  

    React.useEffect(() => {
      axios.get('http://localhost:3001/produto')
      .then((function (response:AxiosResponse)  {
      //console.log(response.data)
      setProdutosState(response.data);
    }));
  }, []);   

  const Router = useRouter();

  function adicionarProduto(produto: Produto) {
    const itemAtual= itens.find((item) => item.produto.id === produto.id) ?? {quantidade: 0, produto} 
    const novoItem = {...itemAtual, quantidade: itemAtual.quantidade + 1}
    const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
    setItens([...outrosItens, novoItem])
    toast.success('novo produto adicionado em seu carrinho');

}

function removerProduto(produto: Produto) {
    
    const itemAtual= itens.find((item) => item.produto.id === produto.id)
    if (itemAtual == undefined)
        return
    
    if (itemAtual.quantidade > 0){
        const novoItem = {...itemAtual, quantidade: itemAtual.quantidade - 1}
        const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
        setItens([...outrosItens, novoItem])
    }else {
        const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
        setItens(outrosItens)
    }
    toast.success('produto removido de seu carrinho');
}
function salvaCarrinho(Item: ItemCarrinho[]){

  let id = localStorage.getItem('id')
  if(Item.length == 0){
    toast.error('Carrinho Vazio');
    return
  }

  itens.forEach(element => {
    const itemcarrinho = element

  const dados = {
   
    produto: itemcarrinho.produto.id,
    quantidade: itemcarrinho.quantidade,
    idUsuario: id
    
  }
  console.log(dados.produto)
  axios.post('http://localhost:3001/carrinho', dados).then(() => {
    
   //router.push('/home')

  }).catch(function (error: any) {
    
    console.error(error);
  
  });

  });

  setItens([])

  toast.success('Compra feita com sucesso');

}

  return ( 

   <div className="h-full">
          <Toaster position="top-center" reverseOrder={false} />

 <Navbar />
    <div className="container flex flex-col mt-5 justify-center items-center">
        
        <Carrinho itens={itens} salvarCarrinho={salvaCarrinho}/>
        <div className='flex flex-row justify-items-stretch items-center m-4'>
          <ListaProdutos produtos={produtosState} adicionarCar={adicionarProduto} removerCar={removerProduto} />
        </div>
             
         
    </div>
     <Footer />
     
    
   </div>
  ) 
}
'use client'

const axios = require('axios');
import { useState } from "react"
import Input from "../components/Input"
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";

interface Props {
  dirs: string[];
}


export default function FormProduto() {

  const [FormData, SetFormData] = useState({
    nome: '',
    descricao: '',
    categoria: '',
    codigo: '',
    preco: '',
    imagem: ''
  })
 
  const Router = useRouter();

  const handleInput = (e: { target: { name: any; value: any; }; }) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    SetFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e: React.FormEvent) => {

    e.preventDefault()

    const formElement = e.target as HTMLFormElement;
    const formURL = formElement.action;

   

    // Object.entries(JSON.stringify(formData)).forEach(([key, value]) => {
    //   data.append(key, value);
    // })
    axios.post(formURL, FormData, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    })
      .then(() => {
        SetFormData({
          nome: '',
          descricao: '',
          categoria: '',
          codigo: '',
          preco: '',
          imagem: ''
        })
        console.log('cheguei')

        Router.push('/home')

        toast.success('cadastro executado');
        
        console.log("chaguei 2")

      }).catch(function (error: any) {
        console.error(error);
        toast.error('Erro ao fazer cadastro');
      });

  }
  

  return (
    
    <section className=" m-10 bg-white  bg-opacity-50 h-full">
    <form method="post" action='http://localhost:3001/produto' onSubmit={submitForm}>

  <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
    <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
      <div className="max-w-sm mx-auto md:w-full md:mx-0">
        <div className="inline-flex items-center space-x-4">


          <h4 className="text-gray-600">Cadastre seu Produto</h4>
          
        </div>
      </div>
    </div>
    <div className="bg-white space-y-6">
      <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
        <h6 className="md:w-1/3 max-w-sm mx-auto">Dados do Produto</h6>
        
        <Input type="text" value={FormData.nome} onChange={handleInput} name="nome" />
      </div>
      <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
        <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
        <Input type="text" value={FormData.descricao}  name="descricao" onChange={handleInput}/>
      </div>
      <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
        <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
        <Input onChange={handleInput} type="text" value={FormData.codigo} name="codigo" />
      </div>
      <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
        <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
        <div className="md:w-2/3 max-w-sm mx-auto">
    <label className="text-sm text-gray-400">Preço</label>
    <div className="w-full inline-flex border">
      <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
        <svg
          fill="none"
          className="w-6 text-gray-400 mx-auto"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>

        </svg>
      </div>
      <input
        type='number'
        name='preco'
        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
        value={FormData.preco}
        step='0.01'
        onChange={handleInput}
      />
    </div>
    </div>
      </div>
      <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
        <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
        <Input type="text" value={FormData.imagem} name="imagem" onChange={handleInput}/>
      </div>
      <hr />
      <div className="w-full p-4  text-end text-gray-500">
      <button type="submit" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
Enviar
</button>
        </div>
      
    </div>
  </div>
  </form>
</section>




  )


}
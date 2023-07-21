'use client'

import axios, { AxiosResponse } from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Input from "../components/Input"
import React from "react"
import moment from "moment"
import toast, { Toaster } from 'react-hot-toast';

export default function DadosForm(){
    
  const [FormData, SetFormData] = useState({
    nome: '',
    cpf: '',
    sobrenome: '',
    dataNasc: '',
    email: '',
    senha: '',
    rua: '',
    bairro: '',
    cep: '',
    cidade: '',
    numero: ''
})
const Router = useRouter();

const handleInput = (e: any ) => {
  const fieldName = e.target.name;
  const fieldValue = e.target.value;

  SetFormData((prevState) => ({
    ...prevState,
    [fieldName]: fieldValue
  }));
}



const submitForm = (e:React.FormEvent)  => {

    e.preventDefault()

    const formElement = e.target as HTMLFormElement; 
    const formURL = formElement.action;
    
    const url = 'http://localhost:3001/usuarios/'
    
    console.log(FormData)

    axios.post(url, FormData)
    .then((res: AxiosResponse) => {
      SetFormData({ 
        nome: '',
        cpf: '',
        sobrenome: '', 
        dataNasc: '',
        email: '',
        senha: '',
        rua: '',
        bairro: '',
        cep: '',
        cidade: '',
        numero: ''
      })
      console.log('cheguei')

      Router.push('/')
      toast.success('Cadastro executado');


    }).catch(function (error: any) {
      toast.error('Erro ao fazer login');
      console.error(error);
    });
     
    
  }
        return(
          
          <section className=" m-10 bg-white  bg-opacity-50 h-full">
            <Toaster position="top-center" reverseOrder={false} />
            <form method="put" onSubmit={submitForm}>

          <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
            <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
              <div className="max-w-sm mx-auto md:w-full md:mx-0">
                <div className="inline-flex items-center space-x-4">
    
    
                  <h1 className="text-gray-600">Suas Informações</h1>
                  
                </div>
              </div>
            </div>
            <div className="bg-white space-y-6">
              <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 className="md:w-1/3 max-w-sm mx-auto">Dados de Usuário</h2>
                
                <Input type="text" value={FormData.email} onChange={handleInput} name="email" />
              </div>
              <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
                <Input type="text" value={FormData.nome}  name="nome" onChange={handleInput}/>
              </div>
              <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
                <Input onChange={handleInput} type="text" value={FormData.cpf} name="cpf" />
              </div>
              <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
                <Input type="date" value={FormData.dataNasc} onChange={handleInput} name="dataNasc" />
              </div>
              <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
                <Input type="text" value={FormData.sobrenome} name="sobrenome" onChange={handleInput}/>
              </div>
            
              <hr />
              <div className="max-w-sm mx-auto md:w-full md:mx-0">
                <div className="inline-flex items-center space-x-4">
    
    
                  <h1 className="text-gray-600"></h1>
                  
                </div>
              </div>
            </div>
            <div className="bg-white space-y-6">
              <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 className="md:w-1/3 max-w-sm mx-auto">Endereço</h2>
                <Input type="text" value={FormData.bairro} name="bairro" onChange={handleInput}/>
              </div>
              <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
                <Input type="text" value={FormData.cidade} name="cidade" onChange={handleInput}/>
              </div>
              <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
                <Input type="text" value={FormData.cep} name="cep" onChange={handleInput}/>
              </div>
              <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
                <Input type="text" value={FormData.rua} name="rua" onChange={handleInput}/>
              </div>
              <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
                <Input type="number" value={FormData.numero} name="numero" onChange={handleInput}/>
              </div>
              <hr />
              <div className="md:w-2/3 max-w-sm mx-auto">
    <label className="text-sm text-gray-400">Senha</label>
    <div className="w-full inline-flex border">
      <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
        <svg
          fill="none"
          className="w-6 text-gray-400 mx-auto"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>

        </svg>
      </div>
      <input
        type="password"
        name="senha"
        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
        value={FormData.senha}
        aria-placeholder={FormData.nome}
        onChange={handleInput}
      />
    </div>
    
                <div className="md:w-3/12 text-center md:pl-6">
                  
                </div>
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
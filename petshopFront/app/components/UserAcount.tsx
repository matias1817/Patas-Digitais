import { SendHandle } from "child_process"
import InputDisable from "./InputDisable"
import toast, { Toaster } from 'react-hot-toast';

import { useRouter } from "next/navigation"
import axios, { AxiosResponse } from "axios"

interface userDTOPros {
  nome: string
  sobrenome: string
  cpf: string
  email: string
  dataNasc: string
  senha: string
  rua: string,
  bairro: string
  cep: string
  cidade: string
  numero: number
}

export default function UserAcount(props: userDTOPros) {
  const Router = useRouter()

function deleta(){
  const url = 'http://localhost:3001/usuarios/' + localStorage.getItem('id')
  axios.delete(url)
  .then((function (response:AxiosResponse)  {
    localStorage.removeItem('id')
    toast.success('Conta excluida com sucesso');
    Router.push('/')

}))
}

  return (
    <section className=" m-10 bg-white  bg-opacity-50 h-full">
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
            <InputDisable type="text" value={props.email} name="Email" />
          </div>
          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
            <InputDisable type="text" value={props.nome} name="Nome" />
          </div>
          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
            <InputDisable type="text" value={props.cpf} name="CPF" />
          </div>
          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
            <InputDisable type="date" value={props.dataNasc} name="Data de Nascimento" />
          </div>
          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
            <InputDisable type="text" value={props.sobrenome} name="Sobrenome" />
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
            <InputDisable type="text" value={props.bairro} name="Bairro" />
          </div>
          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
            <InputDisable type="text" value={props.cidade} name="Cidade" />
          </div>
          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
            <InputDisable type="text" value={props.cep} name="CEP" />
          </div>
          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
            <InputDisable type="text" value={props.rua} name="Rua" />
          </div>
          <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
            <h2 className="md:w-1/3 max-w-sm mx-auto"></h2>
            <InputDisable type="number" value={props.numero} name="numero" />
          </div>
          <hr />
          <div className="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
            <h2 className="md:w-4/12 max-w-sm mx-auto">Senha</h2>

            <div className="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
              <div className="w-full inline-flex border-b">
                <div className="w-1/12 pt-2">
                  <svg
                    fill="none"
                    className="w-6 text-gray-400 mx-auto"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <InputDisable
                  type="password"
                  name="senha"
                  value={props.senha}
                />
              </div>
            </div>

            <div className="md:w-3/12 text-center md:pl-6">
              
            </div>
          </div>

          <hr />
          <div className="w-full p-4  text-end text-gray-500">
            <button className="inline-flex items-center focus:outline-none mr-4" onClick={()=>Router.push('/edicaoUsuario')}>
              <svg
                fill="none"
                className="w-4 mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
               <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>,
              </svg>
             Editar Conta
            </button>
            </div>
          <div className="w-full p-4 text-right text-gray-500">
            <button className="inline-flex items-center focus:outline-none mr-4" onClick={deleta}>
              <svg
                fill="none"
                className="w-4 mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
             Apagar Conta
            </button>
          </div>
        </div>
      </div>
    </section>)
}
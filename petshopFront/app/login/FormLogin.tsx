'use client'

const axios = require('axios');
import { redirect } from 'next/navigation'
import { useState } from "react"
import Input from "../components/Input"
import { useRouter } from "next/navigation";
import '../../public/lib/materialize/css/materialize.css'
import Link from 'next/link';
import jwt, { Secret } from 'jsonwebtoken';
import React from 'react';
import { AxiosResponse } from 'axios';
import dotenv from 'dotenv';
import { secretKey } from "../../segredo"
import Footer from '../components/footer';
import toast, { Toaster } from 'react-hot-toast';

dotenv.config()

export default function FormLogin() {
  


  const [FormData, setFormData] = useState({
    email: '',
    senha: '',
  })
  const Router = useRouter();

  const handleInput = (e: { target: { name: any; value: any; }; }) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = async (e: React.FormEvent) => {

    e.preventDefault()

    const formElement = e.target as HTMLFormElement;
    const formURL = formElement.action;

    // const data = new FormData()

    // console.log(JSON.stringify(formData))

    // Object.entries(JSON.stringify(formData)).forEach(([key, value]) => {
    //   data.append(key, value);
    // })
    if(FormData.email=='admin@gmail.com' && FormData.senha=='admin'){
      Router.push('/home')
      localStorage.setItem("admminId", '1')
      toast.success('login executado')
      return  
    } else {

    axios.post("http://localhost:3001/login", FormData, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    })
      .then((res: AxiosResponse) => {
        setFormData({
          email: '',
          senha: '',
        })
        // const token = jwt.sign({
        //   id: res.data.id,
        //   email: res.data.email
        // },
        //   secretKey
        // );
        // localStorage.setItem("token",token);
              toast.success('Login executado');

        localStorage.setItem("nome", res.data.nome)
        localStorage.setItem("id", res.data.id)

        Router.push('/home')


      }).catch(function (error: any) {
        console.error(error);
        toast.error('Erro ao fazer login');
      });
    }
    // fetch(formURL,  {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   mode: 'no-cors',
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json"
    // },
    // }).then(() => {
    //   setFormData({ 
    //     nome: '',
    //     cpf: '',
    //     sobrenome: '',
    //     email: '',
    //     senha: ''
    //   })
    //   setFormSuccess(true)
    // })
  }


  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700  relative bottom-0 leading-5 overflow-hidden  w-screen">
            <Toaster position="top-center" reverseOrder={false} />

      <div
        className="flex flex-col relative  w-screen h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl ">
        <div className="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10 ">
          <div className="self-start hidden lg:flex flex-col  text-gray-300 m-4">

            <h1 className="my-3 font-semibold text-4xl">Bem vindo ao Patas Digitais Pet Shop</h1>
            <p className="pr-3 text-sm opacity-75">Seu destino online para tudo o que seu pet precisa. Produtos de qualidade e cuidado excepcional. Cuide do seu companheiro com amor e praticidade.</p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <form method='post' onSubmit={submitForm}>
            <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
              <div className="mb-7">
                <h3 className="font-semibold text-2xl text-gray-800">Login</h3>
                <p className="text-gray-400">Não tem uma conta ? <Link href="/usuario"
                  className="text-sm text-purple-700 hover:text-purple-700">Cadastre-se</Link></p>
              </div>

              <div className="space-y-6">
                <div className="">

                  <input  onChange={handleInput} className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400" type="text" name='email' placeholder="Email" value={FormData.email} />
                </div>


                <div className="relative" x-data="{ show: true }">
                  <input name='senha' 
                  onChange={handleInput} 
                  type='password' 
                  value={FormData.senha} 
                  placeholder="Password" className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400" />
                  <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">

                  </div>
                </div>


               
                <div>
                  <button  type="submit" className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                    Enviar
                  </button>
                </div>

                
              </div>

             
            </div>
          </form>
        </div>
      </div>
       <Footer />
    </div>
  )
}

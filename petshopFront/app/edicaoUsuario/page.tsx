'use client'

import axios, { AxiosResponse } from "axios";
import React from "react";
import { useState } from "react";
import UserAcount from "../components/UserAcount";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import moment, {Moment }from 'moment';
import router from "next/router";
import DadosForm from "./DadosForm";


export default function page(){
    // const [formData, setFormData] = useState({
    //     nome: '',
    //     cpf: '',
    //     sobrenome: '', 
    //     dataNasc: '',
    //     email: '',
    //     senha: '',
    //     rua: '',
    //     bairro: '',
    //     cep: '',
    //     cidade: '',
    //     numero: 0
    // })

    
    // React.useEffect(() => {
    //     const url = 'http://localhost:3001/usuarios/' + localStorage.getItem('id')
    //     axios.get(url)
    //     .then((function (response:AxiosResponse)  {

    //     setFormData(response.data);
        
    //     const Data = moment(formData.dataNasc).toDate()

    //     const newDataNasc = moment(response.data.dataNasc).format("YYYY-MM-DD")   
        
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         dataNasc: newDataNasc,
    //     }));
    //   }));
    // }, []);   
    
    // const handleInput = (e: { target: { name: any; value: any; }; }) => {
    //     const fieldName = e.target.name;
    //     const fieldValue = e.target.value;
      
    //     setFormData((prevState) => ({
    //       ...prevState,
    //       [fieldName]: fieldValue
    //     }));
    // }

    // const submitForm = (e:React.FormEvent)  => {
    
    //     e.preventDefault()

    //     const formElement = e.target as HTMLFormElement; 
    //     const formURL = formElement.action;
        
    //     const data = new FormData()
      
    //     console.log(JSON.stringify(formData))

    //     Object.entries(JSON.stringify(formData)).forEach(([key, value]) => {
    //       data.append(key, value);
    //     })
    //     axios.post(formURL, formData,)
    //     .then(() => {
    //       setFormData({ 
    //         nome: '',
    //         cpf: '',
    //         sobrenome: '', 
    //         dataNasc: '',
    //         email: '',
    //         senha: '',
    //         rua: '',
    //         bairro: '',
    //         cep: '',
    //         cidade: '',
    //         numero: 0
    //       })
    //       console.log('cheguei')

    //       router.push('/home')

    //       console.log("chaguei 2")

    //     }).catch(function (error: any) {
    //       console.error(error);
    //     });
         
    //   }

    return( 
        <div className="w-full h-full bg-white">
            <Navbar />

            <DadosForm />

            <Footer />
        </div>
      
        )
}
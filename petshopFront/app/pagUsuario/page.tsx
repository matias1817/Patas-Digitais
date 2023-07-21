'use client'

import axios, { AxiosResponse } from "axios";
import React from "react";
import { useState } from "react";
import UserAcount from "../components/UserAcount";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import moment, {Moment }from 'moment';
import toast, { Toaster } from 'react-hot-toast';

export default function PagformData(){
    const [FormData, setFormData] = useState({
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
        numero: 0
    })

    React.useEffect(() => {
        const url = 'http://localhost:3001/usuarios/' + localStorage.getItem('id')
        axios.get(url)
        .then((function (response:AxiosResponse)  {

        setFormData(response.data);
        
        const Data = moment(FormData.dataNasc).toDate()

        const newDataNasc = moment(response.data.dataNasc).format("YYYY-MM-DD") 
          
        
        setFormData((prevState) => ({
            ...prevState,
            dataNasc: newDataNasc,
        }));
      }));
    }, []);   
   

    return( 
        <div className="w-full h-full bg-white">
            <Navbar />

            <UserAcount 
            bairro={FormData.bairro} 
            cep={FormData.cep} 
            cidade={FormData.cidade} 
            cpf={FormData.cpf} 
            dataNasc={FormData.dataNasc} 
            email={FormData.email} 
            nome={FormData.nome} 
            numero={FormData.numero}
            senha= {FormData.senha}
            sobrenome={FormData.sobrenome} 
            rua={FormData.rua}
             />

            <Footer />
        </div>
      
        )
}
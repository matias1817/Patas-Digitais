'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminId = localStorage.getItem("admminId");
    setIsAdmin(adminId ? true : false);
  }, []);
  

    return(
      <div className="h10 w-full bg-white  ">
        <Toaster position="top-center" reverseOrder={false} />
      <nav className="header-links contents font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          <li className="p-3 xl:p-6 ">
            
            <Link href="/home">
              <span>Home</span>
            </Link>
          </li>{
            isAdmin ?

          <li className="p-3 xl:p-6">
              <Link href="/produto">
                <span >Cadastrar produto</span>
            </Link>
          </li> 
          :
          <li className="p-3 xl:p-6">
          <Link href="/pagUsuario">
            <span >Minha Conta</span>
          </Link>
        </li>
            
          }
          
          <li className="p-3 xl:p-6">
            <Link href="/aboutUs">
              <span>Sobre</span>
            </Link>
          </li>
          <li className="p-3 xl:p-6">
            <Link href="contacts">
              <span>Contatos</span>
            </Link>
          </li>
          
          <li className="p-3 xl:p-6">
            <Link href="/" onClick={()=>{
              localStorage.removeItem("id")
              localStorage.removeItem("admminId")
              toast.success('Log out executado');
            }} className="flex items-center">
              <span>Sair</span>
              <svg  aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-chevron-down fa-w-14 fa-7x h-3 opacity-30 ml-2"><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg>
            </Link>
          </li>
        </ul>
      </nav> 
    </div>
)
}
import Link from "next/link";

export default function Footer(){

return(
       
<footer className="bottom-0 bg-white rounded-lg shadow m-4 dark:bg-gray-800 " >
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between lg:flex lg:flex-col">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Patas Digitais. Todos os direitos reservados.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link  href="/aboutUs" className="mr-4 hover:underline md:mr-6 ">Sobre</Link>
        </li>
        <li>
            <Link href='/contacts'>Contatos</Link>
        </li>
        
        
    </ul>
    </div>
</footer>

)
}
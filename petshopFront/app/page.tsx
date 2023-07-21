import Image from 'next/image'
import Link from 'next/link'
import FormLogin from './login/FormLogin'
import Navbar from './components/navbar'
import Footer from './components/footer'


export default function Home() {
  return (
<div className='h-screen'>

    <div className='flex flex-row-reverse'>
    <FormLogin />
        
    </div>

    </div>
  )
}

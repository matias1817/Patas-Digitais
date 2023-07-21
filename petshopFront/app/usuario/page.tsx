import Footer from "../components/footer";
import Navbar from "../components/navbar";
import FormUsuario from "./FormUsuario";


export default function Home() {
  return ( 
    
    <div className='w-full h-full bg-white'>
      <Navbar />
      <FormUsuario />
      <Footer />
    </div>
  ) 
}

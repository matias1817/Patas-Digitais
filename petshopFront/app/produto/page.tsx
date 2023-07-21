import FormProduto from "./FormProduto";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return ( 
        
    <div className='w-full h-full bg-white'>
      <Navbar />
      <FormProduto />
      <Footer />
    </div>
 
  ) 
}
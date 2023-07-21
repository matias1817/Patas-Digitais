import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Edicao from "./edicaoProd";
import { useRouter} from 'next/router';


export default function EdicaoProd (){
    return(
        <div className="w-full h-full bg-white">
        <Navbar />

        <Edicao />

        <Footer />
        </div>
  
    )
}
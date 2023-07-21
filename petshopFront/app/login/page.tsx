import Navbar from "../components/navbar";
import FormLogin from "./FormLogin";

export default function Home() {
  return ( 
    <div>
    <Navbar />
    <div className='flex justify-center items-center h-screen'>
      <FormLogin />
    </div>
    </div>
  ) 
}

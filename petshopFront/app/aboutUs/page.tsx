import Image from 'next/image'
import dhdj from '../../public/gatoFoto.jpeg'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
export default function AboutUs(){
    return(
<section className="bg-white dark:bg-gray-900 h-screen">
    <Navbar />
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Patas Digitais</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non dictum justo, eget consectetur augue. Integer at iaculis justo. Curabitur tristique feugiat felis, sed cursus purus pellentesque vitae. Nulla vel pulvinar ante. Curabitur porta placerat est, ut ullamcorper neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac magna sit amet ipsum commodo egestas. Maecenas in tincidunt ipsum, ut fermentum nisl. In vel leo sit amet lorem tristique gravida et sed orci.</p>
            <p></p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" width={'12'} height={'12'} src="https://image.cachorrogato.com.br/textimages/pet-shop-24-horas.jpg" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" width={'12'} height={'12'} src="https://st.depositphotos.com/1146092/2099/i/950/depositphotos_20998311-stock-photo-shopping-dog.jpg" alt="office content 2" />
        </div>
        
    </div>
    <Footer />
</section>)
}
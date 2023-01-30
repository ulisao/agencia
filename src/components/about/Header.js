import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
      { name: 'Contacto', href: '/contacto' },
  ],
  company: [
      { name: 'Casos', href: '/casos' },
      { name: 'Servicios', href: '/servicios' },
      { name: 'Nosotros', href: '/nosotros' },
      { name: 'Carreras', href: '/carreras' },
      { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}
function Header(){

    

    return(
        <main>
        <div className="relative">
          <div className="mx-auto max-w-4xl xl:mx-12 xl:pt-40 xl:pb-48 lg:pt-40 lg:pb-48 pt-24 pb-12 ">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-16 leading-8 sm:text-7xl">
                  Nosotros
                </h1>
                <p className="text-2xl max-w-3xl leading-8 text-black ">
                  Somos una empresa de desarrollo de software especializada en brindar soluciones personalizadas para nuestros clientes.  Nuestra visión es ser líderes en el mercado, brindando soluciones innovadoras y de alta calidad para ayudar a nuestros clientes a alcanzar sus objetivos y hacer crecer su negocio. Trabajamos de la mano con nuestros clientes para entender sus necesidades y desarrollar soluciones que se adapten a sus requerimientos específicos.
                </p>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
                <img src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" className='w-full h-full object-cover'/>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header
import LogoYum from '../../assets/LogoYum.png'
import Icon from '../redesociales'

import facebookIcon from '../icon/facebook.svg'
import instagramIcon from '../icon/instagram.svg'
import tiktokIcon from '../icon/tiktok.svg'
import whatsappIcon from '../icon/whatsapp.svg'

export const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-grow"></div>
      <footer className="bg-black w-full">
        <div className="px-4 py-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-1">
              <img
                className="h-16 w-auto mb-3"
                src={LogoYum}
                alt="Logo yum yum japan"
              />
              <div className="text-white">
                <p className="mb-4 font-light">
                  Tienda online de golosinas y comida instantánea de origen
                  japonés.
                </p>
                <p className="mb-4 font-light">
                  ¡Disfruta del sabor de Japón desde cualquier parte de
                  latinoamerica!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-medium tracking-wider text-[#F07F96]">
                  Categorías
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Snacks
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Comida instantánea
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Golosinas
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Galletas
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Bebidas
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Combos Box
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium tracking-wider text-[#F07F96]">
                  Información legal
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Términos y condiciones
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Política de privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Política de cookies
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium tracking-wider text-[#F07F96]">
                  Contacto
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      +54 9 11 0000-0000
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      info@yumyumjapan.com.ar
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Av. Nombre de la Calle 1234
                    </a>
                  </li>
                </ul>
                <p className="font-medium tracking-wider text-[#F07F96] mt-4">
                  Redes Sociales
                </p>
                <ul className="flex space-x-4 mt-2">
                  <li>
                    <a href="https://www.facebook.com">
                      <Icon src={facebookIcon} alt="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com">
                      <Icon src={instagramIcon} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/es/">
                      <Icon src={tiktokIcon} alt="TikTok" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.whatsapp.com/?lang=es_LA">
                      <Icon src={whatsappIcon} alt="WhatsApp" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-1">
                <p className="font-medium text-[#F07F96] mb-2">Newsletter</p>
                <p className="text-gray-500 mb-4">
                  No te pierdas descuentos, promociones exclusivas y el ingreso
                  de nuevos productos.
                </p>
                <form className="flex flex-col space-y-4">
                  <input
                    placeholder="Escribe tu correo"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  />
                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 rounded-full text-sm px-5 py-2.5 text-center"
                  >
                    Suscribirse
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#54ACB6] flex flex-col justify-center items-center py-3 border-t border-gray-800">
          <p className="text-sm text-black font-bold">
            Yum Yum Japan © 2024. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

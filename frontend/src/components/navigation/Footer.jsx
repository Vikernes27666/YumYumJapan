import LogoYum from '../../assets/LogoYum.png';

export const Footer = () => {
  return (
    <div className="bg-black">
      <div className="px-2 pt-16 sm:max-w-xl lg:max-w-screen-xl">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-5">
                <div>
                  <img
                    className="h-16 w-auto"
                    src={LogoYum}
                    alt="Logo yum yum japan"
                  />
                </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium tracking-wider text-red-300">
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
              <p className="font-medium tracking-wider text-red-300">Información legal</p>
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
              <p className="font-medium tracking-wider text-red-300">Contacto</p>
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
            </div>
            <div className=" font-medium  text-red-300 mb-2">
              Newsletter
              <p
              className="text-gray-500 mb-4"
              >No te pierdas descuentos, promociones exclusivas y el ingreso de nuevos productos.</p>
            <form className="flex flex-col space-y-4">
              <input
                placeholder="Escribe tu correo"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button 
                type="button" 
                className="text-white bg-red-700 hover:bg-red-800  
                  rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Suscribirse
              </button>
            </form>
          </div>
          </div>
          </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            Yum Yum Japan © 2024. Todos los derechos reservados.
          </p>
          
        </div>
      </div>
    </div>
  );
};
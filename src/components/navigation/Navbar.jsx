import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon
} from "@heroicons/react/outline";
import { Link } from 'react-router-dom';
import Icon from '../../assets/Navbar-Logo.png'



export function Navbar() {
  return (
    <Popover className="relative bg-white">
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <a href="#" className="flex">

              <Link to="/#">
              <img
                className="h-10 w-auto sm:h-12"
                src={Icon}
                alt="logo"
              />
              </Link>
            </a>
          </div>

          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <div className="relative w-[70%]">
  <input
    type="search"
    className="block w-full pl-4 pr-10 py-2 border-2 border-[#43949D] rounded-[50px] placeholder:text-[#43949D]"
    placeholder="¿Qué estás buscando?"
    aria-label="Buscar"
  />
    <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#43949D]">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1111 3a7.5 7.5 0 015.65 13.65z"></path>
    </svg>
  </button>
</div>
<div className="flex items-center font-semibold	">
              <Link to="/Login" className="text-[#DB1A40] font-semibold">
                Iniciar sesión
              </Link>
              <span className="mx-3 text-[#DB1A40]">|</span>
              <Link to="/Signup" className="text-[#DB1A40] font-semibold">
                Registrarse
              </Link>
              <a
                href="#"
                className="ml-5 text-gray-500 hover:text-gray-900 bg-[#43949D] rounded-[50px] p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21 21"
                  fill="none"
                  className="w-4 h-4 "
                >
                  <path
                    d="M6.46582 20.1624C5.91582 20.1624 5.44499 19.9665 5.05332 19.5749C4.66165 19.1832 4.46582 18.7124 4.46582 18.1624C4.46582 17.6124 4.66165 17.1415 5.05332 16.7499C5.44499 16.3582 5.91582 16.1624 6.46582 16.1624C7.01582 16.1624 7.48665 16.3582 7.87832 16.7499C8.26999 17.1415 8.46582 17.6124 8.46582 18.1624C8.46582 18.7124 8.26999 19.1832 7.87832 19.5749C7.48665 19.9665 7.01582 20.1624 6.46582 20.1624ZM16.4658 20.1624C15.9158 20.1624 15.445 19.9665 15.0533 19.5749C14.6617 19.1832 14.4658 18.7124 14.4658 18.1624C14.4658 17.6124 14.6617 17.1415 15.0533 16.7499C15.445 16.3582 15.9158 16.1624 16.4658 16.1624C17.0158 16.1624 17.4867 16.3582 17.8783 16.7499C18.27 17.1415 18.4658 17.6124 18.4658 18.1624C18.4658 18.7124 18.27 19.1832 17.8783 19.5749C17.4867 19.9665 17.0158 20.1624 16.4658 20.1624ZM5.61582 4.16235L8.01582 9.16235H15.0158L17.7658 4.16235H5.61582ZM4.66582 2.16235H19.4158C19.7992 2.16235 20.0908 2.33319 20.2908 2.67485C20.4908 3.01652 20.4992 3.36235 20.3158 3.71235L16.7658 10.1124C16.5825 10.4457 16.3367 10.704 16.0283 10.8874C15.72 11.0707 15.3825 11.1624 15.0158 11.1624H7.56582L6.46582 13.1624H18.4658V15.1624H6.46582C5.71582 15.1624 5.14915 14.8332 4.76582 14.1749C4.38249 13.5165 4.36582 12.8624 4.71582 12.2124L6.06582 9.76235L2.46582 2.16235H0.46582V0.162354H3.71582L4.66582 2.16235Z"
                    fill="white"
                    
                  />
                </svg>
              </a>
            </div>
           
          </div>
          
        </div>
        <div className="w-full bg-[#DB1A40] overflow-x-auto hidden md:block">
  <div className="flex items-center font-semibold justify-center whitespace-nowrap">
    <Link to="/Snacks" className="text-[#ffffff] font-semibold p-2">
      SNACKS
    </Link>
    <span className="mx-3 text-[#ffffff]">|</span>
    <Link to="/ComidaInstantanea" className="text-[#ffffff] font-semibold p-2">
      COMIDA INSTANTÁNEA
    </Link>
    <span className="mx-3 text-[#ffffff]">|</span>
    <Link to="/Golosinas" className="text-[#ffffff] font-semibold p-2">
      GOLOSINAS
    </Link>
    <span className="mx-3 text-[#ffffff]">|</span>
    <Link to="/Chocolates" className="text-[#ffffff] font-semibold p-2">
      CHOCOLATES
    </Link>
    <span className="mx-3 text-[#ffffff]">|</span>
    <Link to="/Galletas" className="text-[#ffffff] font-semibold p-2">
      GALLETAS
    </Link>
    <span className="mx-3 text-[#ffffff]">|</span>
    <Link to="/Bebidas" className="text-[#ffffff] font-bold p-2">
      BEBIDAS  
    </Link>
    <span className="mx-3 text-[#ffffff]">|</span>
    <Link to="/CombosBox" className="text-[#ffffff] font-bold p-2">
      COMBOS BOX 
    </Link>
    <span className="mx-3 text-[#ffffff]">|</span>
  </div>
</div>



      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
<Popover.Panel
  focus
  className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
>
  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
    <div className="pt-5 pb-6 px-5 sm:pb-8">
      <div className="flex items-center justify-between">
        <div className="bg-[#43949D] rounded-[50px] p-4"
>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
                  <path
                    d="M6.46582 20.1624C5.91582 20.1624 5.44499 19.9665 5.05332 19.5749C4.66165 19.1832 4.46582 18.7124 4.46582 18.1624C4.46582 17.6124 4.66165 17.1415 5.05332 16.7499C5.44499 16.3582 5.91582 16.1624 6.46582 16.1624C7.01582 16.1624 7.48665 16.3582 7.87832 16.7499C8.26999 17.1415 8.46582 17.6124 8.46582 18.1624C8.46582 18.7124 8.26999 19.1832 7.87832 19.5749C7.48665 19.9665 7.01582 20.1624 6.46582 20.1624ZM16.4658 20.1624C15.9158 20.1624 15.445 19.9665 15.0533 19.5749C14.6617 19.1832 14.4658 18.7124 14.4658 18.1624C14.4658 17.6124 14.6617 17.1415 15.0533 16.7499C15.445 16.3582 15.9158 16.1624 16.4658 16.1624C17.0158 16.1624 17.4867 16.3582 17.8783 16.7499C18.27 17.1415 18.4658 17.6124 18.4658 18.1624C18.4658 18.7124 18.27 19.1832 17.8783 19.5749C17.4867 19.9665 17.0158 20.1624 16.4658 20.1624ZM5.61582 4.16235L8.01582 9.16235H15.0158L17.7658 4.16235H5.61582ZM4.66582 2.16235H19.4158C19.7992 2.16235 20.0908 2.33319 20.2908 2.67485C20.4908 3.01652 20.4992 3.36235 20.3158 3.71235L16.7658 10.1124C16.5825 10.4457 16.3367 10.704 16.0283 10.8874C15.72 11.0707 15.3825 11.1624 15.0158 11.1624H7.56582L6.46582 13.1624H18.4658V15.1624H6.46582C5.71582 15.1624 5.14915 14.8332 4.76582 14.1749C4.38249 13.5165 4.36582 12.8624 4.71582 12.2124L6.06582 9.76235L2.46582 2.16235H0.46582V0.162354H3.71582L4.66582 2.16235Z"
                    fill="white"               
                  />
        </svg>
        </div>
        <div className="-mr-2">
        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 focus:border-red-500">
            <span className="sr-only">Close menu</span>
            <XIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
      </div>
    </div>

    <div className="py-6 px-5">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-white px-5">
          <a href="#" className="text-[#DB1A40] font-semibold py-2 block">
            Iniciar sesión
          </a>
          <a href="#" className="text-[#DB1A40] font-semibold py-2 block">
            Registrarse
          </a>
        </div>
        <hr className="border-red-500 w-full my-4" />
        <div className="bg-[#DB1A40] p-4">
          <a href="#" className="text-white font-semibold block border-b border-red-500 pb-4">
            SNACKS
          </a>
          <a href="#" className="text-white font-semibold block border-b border-red-500 pb-4">
            COMIDA INSTANTÁNEA
          </a>
          <a href="#" className="text-white font-semibold block border-b border-red-500 pb-4">
            GOLOSINAS
          </a>
          <a href="#" className="text-white font-semibold block border-b border-red-500 pb-4">
            CHOCOLATES
          </a>
          <a href="#" className="text-white font-semibold block border-b border-red-500 pb-4">
            GALLETAS
          </a>
          <a href="#" className="text-white font-bold block border-b border-red-500 pb-4">
            BEBIDAS
          </a>
          <a href="#" className="text-white font-bold block">
            COMBOS BOX
          </a>
        </div>
      </div>
    </div>
  </div>
</Popover.Panel>

      </Transition>
    </Popover>
  );
}

  <Popover/>

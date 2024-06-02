import { Fragment } from 'react'
import logo from './../../assets/Logo.svg';
import icono from './../../assets/icono.svg';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon
  
} from "@heroicons/react/outline";


} from '@heroicons/react/outline'

import { ChevronDownIcon } from '@heroicons/react/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function Navbar() {
  return (
    <Popover className="relative bg-white">

<div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"></div>
     
      <div className="relative z-20">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <a href="#" className="flex">
              <span className="sr-only">Workflow</span>
              <img
                className="h-10 w-auto sm:h-12"
                src="https://res.cloudinary.com/duwahxygm/image/upload/v1717236586/logo-yum_hrjapn.png"
                alt="logo"
              />
            </a>
          </div>

      <div className="w-full max-w-[1440px] mx-auto h-[120px] flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div className="relative z-20">
            <div className="max-w-[1440px] mx-auto h-[120px] flex justify-between items-center">
              <div>
                <a href="#" className="flex">
                  <img
                    className="h-14 w-auto sm:h-20"
                    src={logo}
                    alt="Logo"
        />
          </a>
        </div>
        
         </div>


         
          </div>
          
          
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>



 {/* Barra de búsqueda para pantallas medianas y grandes */}
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <div className="relative md:w-[64%]">
              <input
                type="search"
                className="block w-full px-4 py-3 border border-green-600 rounded-full focus:ring-green-500 focus:border-green-500 outline-none text-green-600 placeholder-green-600"
                placeholder="¿Qué estás buscando?"
                aria-label="Buscar"
              />
              <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <FaSearch />
              </button>
            </div>
<div className="flex items-center ml-2 mx-14 font-montserrat font-medium">
  
  <a href="#" className="text-base text-lg hover:text-gray-900 text-red-500">
    Iniciar sesión 
  </a>
  <span className="mx-4 text-red-500">|</span>
  <a
    href="#"
    className="text-base font text-lg hover:text-gray-900 text-red-500"
  >
    Registrarse
  </a>
<a href="#" className="ml-10 text-gray-500 hover:text-gray-900">
<div className="flex items-center justify-center w-10 h-10" style={{ backgroundColor: '#54ACB6', borderRadius: '50%' }}>
<FaShoppingCart />


            <div className="flex items-center font-semibold	">
              <a href="#" className="text-[#DB1A40] font-bold	">
                Iniciar sesión
              </a>
              <span className="mx-3 text-[#DB1A40]">|</span>
              <a href="#" className="text-[#DB1A40] font-bold">
                Registrarse
              </a>
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
</a>

</div>
</div>


      </div>

        <div className="hidden md:flex justify-center bg-red-500 text-white font-montserrat font-medium overflow-x-auto">
      <div className="px-8 py-2 flex items-center space-x-8">
    <a href="#" className="">SNACKS</a>
    <span className=" ">|</span>
    <a href="#" className="">COMIDA INSTANTÁNEA</a>
    <span className=" ">|</span>
    <a href="#" className="">GOLOSINAS</a>
    <span className=" ">|</span>
    <a href="#" className="">CHOCOLATES</a>
    <span className=" ">|</span>
    <a href="#" className="">GALLETAS</a>
    <span className=" ">|</span>
    <a href="#" className="">BEBIDAS</a>
    <span className=" ">|</span>
    <a href="#" className="">COMBOS BOX</a>
  </div>

        </div>
        <div className="w-[100%] bg-[#DB1A40]">
        <div className="flex items-center font-semibold justify-center	">
              <a href="#" className="text-[#ffffff] font-semibold p-2">
              SNACKS
              </a>
              <span className="mx-3 text-[#ffffff]">|</span>
              <a href="#" className="text-[#ffffff] font-semibold p-2	">
              COMIDA INSTANTÁNEA
              </a>
              <span className="mx-3 text-[#ffffff]">|</span>
              <a href="#" className="text-[#ffffff] font-semibold	p-2">
              GOLOSINAS
              </a>
              <span className="mx-3 text-[#ffffff]">|</span>
              <a href="#" className="text-[#ffffff] font-semibold	p-2">
              CHOCOLATES
              </a>
              <span className="mx-3 text-[#ffffff]">|</span>
              <a href="#" className="text-[#ffffff] font-semibold	p-2">
              GALLETAS
              </a>
              <span className="mx-3 text-[#ffffff]">|</span>
              <a href="#" className="text-[#ffffff] font-bold	">
              BEBIDAS
              </a>
              <span className="mx-3 text-[#ffffff]">|</span>
              <a href="#" className="text-[#ffffff] font-bold	">
              COMBOS BOX
              </a>
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
          <div>
          <img
          className="h-10"
          src={icono} 
          alt="icono"
        />
          </div>
          <div className="-mr-2">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Close menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="py-6 px-5">
          <div className="mt-6">
            <a
              href="#"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
            <p className="mt-6 text-center text-base font-medium text-gray-500">
              Existing customer?{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Categorías */}
      <div className="py-4 px-5">
        <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Categorías</h3>
        <div className="flex flex-col space-y-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">Snacks</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Comida Instantánea</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Golosinas</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Chocolates</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Galletas</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Bebidas</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Combos box</a>
        </div>
      </div>
    </div>
  </Popover.Panel>
</Transition>

    </Popover>
  )
}

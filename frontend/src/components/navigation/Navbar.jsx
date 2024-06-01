import { Fragment } from 'react'
import logo from './../../assets/Logo.svg';
import icono from './../../assets/icono.svg';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
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
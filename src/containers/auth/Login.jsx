import Layout from "../../hocs/Layout";
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'; // Importa los iconos de ojo

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-8 py-10 sm:px-10 sm:py-8 lg:px-12 md:justify-start md:space-x-14"> {/* Ajustamos el padding */}
          <div className="w-96"> {/* Aumentamos el ancho */}
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-black border-b-2 border-red-500">INICIAR SESIÓN</span>
            </h2>
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded shadow-md">  
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Correo electrónico </label> {/* Aumentamos el tamaño del texto */}
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg" // Aumentamos el tamaño del texto
                  placeholder="Ingresa tu correo"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="display:block text-lg font-medium text-gray-700 flex justify-between"> {/* Aumentamos el tamaño del texto */}
                  Contraseña
                  <span className="text-red-500 text-lg cursor-pointer" onClick={() => setShowPassword(!showPassword)}> {/* Aumentamos el tamaño del texto */}
                    {showPassword ? <EyeOffIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
                  </span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg" // Aumentamos el tamaño del texto
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>
              <button type="submit" className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Iniciar Sesión</button> {/* Aumentamos el padding y el tamaño del texto */}
            </form>
            <div className="mt-6 text-lg">
              ¿No tienes cuenta? <a href="#" className="text-black underline">Crea tu cuenta ahora</a>.
            </div>
          </div>
          <div>
            <img src="ruta/a/tu/imagen.jpg" alt="Imagen" className="max-h-96 ml-8" /> {/* Agregamos un margen izquierdo */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

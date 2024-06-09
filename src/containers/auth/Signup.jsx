import Layout from "../../hocs/Layout";
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'; 
import { Link } from 'react-router-dom';
import ImgLogin from "../../assets/ImgLogin.png";

const Signup = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
};

return (
    <Layout>
        <div className="max-w-7xl mx-auto flex flex-row-reverse items-center">
            <div className="w-1/2 p-4"> 
                <h2 className="text-3xl font-bold mb-6">
                    <span className="text-black border-b-2 border-red-500">REGISTRARSE</span>
                </h2>
                <form onSubmit={handleSubmit} className="bg-white p-10 rounded shadow-md">  
                    <div className="mb-4">
                        <label htmlFor="user" className="block text-lg font-medium text-gray-700">Nombre de usuario</label>
                            <input
                                type="text"
                                id="user"
                                value={user}
                                onChange={(e) =>setUser(e.target.value)}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                                placeholder="Ingresa tu nombre de usuario"
                                required
                            />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Correo electrónico </label> 
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg" 
                                placeholder="Ingresa tu correo"
                                required
                            />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="display:block text-lg font-medium text-gray-700 flex justify-between"> 
                            Contraseña
                            <span className="text-red-500 text-lg cursor-pointer" onClick={() => setShowPassword(!showPassword)}> 
                                {showPassword ? <EyeOffIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
                            </span>
                        </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg" 
                                placeholder="Ingresa tu contraseña"
                                required
                            />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="display:block text-lg font-medium text-gray-700 flex justify-between"> 
                            Repetir contraseña
                            <span className="text-red-500 text-lg cursor-pointer" onClick={() => setShowPassword(!showPassword)}> 
                                {showPassword ? <EyeOffIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}                                </span>
                        </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg" 
                                placeholder="Vuelve a ingresar tu contraseña"
                                required
                            />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mt-4">
                            <input
                                name="check"
                                type="checkbox"
                                defaultChecked
                                className="mr-2"
                            />
                            Acepto los términos y condiciones (obligatorio)
                        </label>
                        <label className="block text-lg font-medium text-gray-700 mt-4">
                            <input
                                name="check1"
                                type="checkbox"
                                className="mr-2"
                            />
                            Suscribirme al Newsletter
                        </label>
                    </div>
                    <button type="submit" className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Crear cuenta</button> 
                </form>                    
                <div className="mt-6 text-lg">
                    ¿Ya tienes cuenta? <Link to="/Login" className="text-black underline">Iniciar sesión</Link>
                </div>
            </div>
            
            <div className="w-1/2 p-4 flex justify-center items-center">
                <img src={ImgLogin} alt="Imagen" className="max-h-screen" /> 
            </div>
        </div>
    </Layout>
);
};

export default Signup;
import Layout from '../../hocs/Layout';
import { Link } from 'react-router-dom';
import Error from '../../assets/Error.png';

const Error404 = () => {
return (
    <Layout>
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-row justify-between items-center px-8 py-10 sm:px-10 sm:py-8">
                <div className="w-full md:w-1/2">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold mb-5">
                            <span className="text-red border-b-2 border-red-500">
                                PÁGINA NO ENCONTRADA
                            </span>
                        </h2>
                        <div>
                            <p className="mb-5">
                                No pudimos localizar lo que estás buscando.
                            </p>
                            <p className="mb-5">
                                Es posible que el enlace sea antiguo o que la página haya
                                sido movida.
                            </p>
                        </div>
                        <div>
                            <p className="mb-5">
                                Intenta con la barra de búsqueda, o vuelve al inicio.
                            </p>
                            <p className="mb-5">
                                Si necesitas ayuda, no dudes en contactarnos.
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="text-white bg-red-700 hover:bg-red-800 rounded-full text-sm px-5 py-2.5 text-center"
                    >
                    <Link to="/">
                        Volver al inicio
                    </Link>
                    </button>
                </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <img 
                    src={Error}  
                    alt="Imagen" 
                    className="w-3/4" 
                />
        </div>
    </div>
</div>
 </Layout>
  );
};

export default Error404;


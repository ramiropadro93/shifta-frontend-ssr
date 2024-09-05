import React from 'react';

const FormularioTailwind = () => {
    return (
        <div className="p-5 border border-gray-300 rounded-lg shadow-lg">
            <h1 className="text-center text-2xl text-blue-500 mb-5">
                Sistema de Diseño con Tailwind
            </h1>
            <form className="space-y-5">
                <div className="flex flex-col">
                    <label htmlFor="nombre" className="font-bold mb-2">
                        Nombre:
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        className="p-4 border border-blue-600 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="font-bold mb-2">
                        Correo Electrónico:
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="p-4 border border-blue-600 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="mensaje" className="font-bold mb-2">
                        Mensaje:
                    </label>
                    <textarea
                        id="mensaje"
                        className="p-4 border border-blue-600 rounded-lg resize-y focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default FormularioTailwind;

import React from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
    nombre: string;
    email: string;
    mensaje: string;
}

interface Props {
    onSubmit: (data: FormData) => void;
}

const FormularioDinamico: React.FC<Props> = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-5 w-1/3 mb-10"
        >
            <div className="flex flex-col w-full">
                <label htmlFor="nombre" className="font-bold mb-2">
                    Nombre:
                </label>
                <input
                    id="nombre"
                    type="text"
                    {...register('nombre', {
                        required: 'El nombre es obligatorio',
                    })}
                    className="p-4 border border-blue-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.nombre && (
                    <p className="text-red-500">{errors.nombre.message}</p>
                )}
            </div>

            <div className="flex flex-col w-full">
                <label htmlFor="email" className="font-bold mb-2">
                    Correo Electrónico:
                </label>
                <input
                    id="email"
                    type="email"
                    {...register('email', {
                        required: 'El correo es obligatorio',
                        pattern: {
                            value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                            message: 'Correo no válido',
                        },
                    })}
                    className="p-4 border border-blue-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                )}
            </div>

            <div className="flex flex-col w-full">
                <label htmlFor="mensaje" className="font-bold mb-2">
                    Mensaje:
                </label>
                <textarea
                    id="mensaje"
                    {...register('mensaje', {
                        required: 'El mensaje es obligatorio',
                    })}
                    className="p-4 border border-blue-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.mensaje && (
                    <p className="text-red-500">{errors.mensaje.message}</p>
                )}
            </div>

            <button type="submit" className="p-2 bg-blue-500 text-white w-full rounded-full">
                Aceptar
            </button>
        </form>
    );
};

export default FormularioDinamico;

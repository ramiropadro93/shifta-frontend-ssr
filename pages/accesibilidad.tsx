// pages/accesibilidad.tsx
import React from 'react';
import FormularioAccesible from '@/components/03-accesibilidad-components/FormularioAccesible';

const Accesibilidad: React.FC = () => {
    return (
        <div className="container flex flex-col gap-5">
            <h1 className="text-xl font-bold">Prueba de Accesibilidad</h1>
            <p className='italic font-semibold'>
                Navega por esta interfaz utilizando el teclado y escucha el
                lector de pantalla.
            </p>
            <FormularioAccesible />
        </div>
    );
};

export default Accesibilidad;

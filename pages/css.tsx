import React from 'react';
import FormularioSass from '@/components/04-css-components/FormularioSass';
import FormularioTailwind from '@/components/04-css-components/FormularioTailwind';

const Css = () => {
    return (
        <div className="container flex flex-col gap-5">
            <h1 className="text-xl font-bold">Demostración de CSS con Sass y Tailwind</h1>
            <section className='flex flex-col gap-5'>
                <h2 className='text-lg font-bold'>Formulario con Sass</h2>
                <FormularioSass />
            </section>
			<hr className="border-gray-300 my-5" />
            <section className='flex flex-col gap-5'>
                <h2 className='text-lg font-bold'>Formulario con Tailwind CSS</h2>
                <FormularioTailwind />
            </section>
        </div>
    );
};

export default Css;

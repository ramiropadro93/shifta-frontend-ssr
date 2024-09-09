import React, { useState, useEffect, Suspense } from 'react';
import FormularioDinamico from '../components/05-formulario-dinamico-components/FormularioDinamico';
import { agregarFormulario, obtenerFormularios } from '../utils/db';

// Define el tipo para los datos del formulario
type FormularioData = { nombre: string; email: string; mensaje: string };

// Cargar el componente de la tabla de forma perezosa
const TablaDatos = React.lazy(
    () => import('../components/05-formulario-dinamico-components/TablaDatos')
);

const FormularioPage: React.FC = () => {
    const [datos, setDatos] = useState<FormularioData[]>([]);
    const [cargando, setCargando] = useState(true); // Estado para manejar la carga

    // Cargar los datos desde IndexedDB cuando se monta el componente
    useEffect(() => {
        const cargarDatos = async () => {
            setCargando(true); // Empieza la carga
            const datosGuardados = await obtenerFormularios();
            setDatos(datosGuardados); // Actualiza el estado con los datos cargados
            setCargando(false); // Termina la carga
        };
        cargarDatos();
    }, []);

    const manejarEnvio = async (data: {
        nombre: string;
        email: string;
        mensaje: string;
    }) => {
        // Actualización Optimistic UI: actualiza la UI de inmediato
        const nuevosDatos = [...datos, data];
        setDatos(nuevosDatos);

        // Guardar los datos en IndexedDB
        await agregarFormulario(data);
    };

    return (
      <div className="p-5 flex flex-col items-center">
            <h1 className="text-2xl mb-5">
                Formulario con Lazy Loading y IndexedDB
            </h1>

            <FormularioDinamico onSubmit={manejarEnvio} />
            {cargando ? (
                <p>Cargando datos...</p> // Muestra un mensaje mientras carga
            ) : (
                <Suspense fallback={<p>Cargando tabla...</p>}>
                    <TablaDatos data={datos} />
                </Suspense>
            )}
        </div>
    );
};

export default FormularioPage;

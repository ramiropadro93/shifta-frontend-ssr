import React from 'react';

// Define el tipo para los datos
type FormularioData = { nombre: string; email: string; mensaje: string };

// Propiedades del componente
interface Props {
  data: FormularioData[];
}

// Componente de la tabla
const TablaDatos: React.FC<Props> = ({ data }) => {
  return (
    <div className='w-full'>
      <h2 className="text-xl mb-3">Datos Guardados</h2>
      <table className="w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 text-center border-b">Nombre</th>
            <th className="py-2 text-center border-b">Email</th>
            <th className="py-2 text-center border-b">Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 text-center border-b">{item.nombre}</td>
              <td className="py-2 text-center border-b">{item.email}</td>
              <td className="py-2 text-center border-b">{item.mensaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatos;

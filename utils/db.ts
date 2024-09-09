import { openDB } from 'idb';

const DATABASE_NAME = 'FormularioDB';
const STORE_NAME = 'formularios';

const initDB = async () => {
    return openDB(DATABASE_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, {
                    keyPath: 'id',
                    autoIncrement: true,
                });
            }
        },
    });
};

export const agregarFormulario = async (data: {
    nombre: string;
    email: string;
    mensaje: string;
}) => {
    const db = await initDB();
    return db.add(STORE_NAME, data);
};


// Define el tipo para los datos del formulario
type FormularioData = { nombre: string; email: string; mensaje: string };

export const obtenerFormularios = async (): Promise<FormularioData[]> => {
    const db = await initDB();
    return new Promise((resolve) => {
        setTimeout(async () => {
            const registros = await db.getAll(STORE_NAME);
            resolve(registros);
        }, 2000);
    });
};

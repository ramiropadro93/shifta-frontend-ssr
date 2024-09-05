import React, { useState } from 'react';
import styles from '@/styles/accesibilidad.module.scss';

const FormularioAccesible: React.FC = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const manejarEnvio = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
    };

    const formIsValid = () => nombre && email && mensaje;

    return (
        <form onSubmit={manejarEnvio} className="flex flex-col items-center gap-5">
            <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    aria-label="Ingrese su nombre"
                    aria-required="true"
                    required
                    className={styles.input}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Ingrese su correo electrónico"
                    aria-required="true"
                    required
                    className={styles.input}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                    id="mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    aria-label="Escriba su mensaje"
                    aria-required="true"
                    required
                    className={styles.textarea}
                />
            </div>

            <button
                type="submit"
                disabled={!formIsValid()}
                className={
                    formIsValid() ? styles.button : styles.buttonDisabled
                }
            >
                Enviar
            </button>
        </form>
    );
};

export default FormularioAccesible;

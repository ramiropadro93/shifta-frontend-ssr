import React from 'react';
import styles from '@/styles/css.module.scss';

const FormularioSass = () => {
  return (
    <div className={styles.formularioContenedor}>
      <h1 className={styles.formularioTitulo}>Sistema de Diseño con Sass</h1>
      <form className={styles.formulario}>
        <div className={styles.fila}>
          <label htmlFor="nombre">Nombre:</label>
          <input id="nombre" type="text" />
        </div>
        <div className={styles.fila}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input id="email" type="email" />
        </div>
        <div className={styles.fila}>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje"></textarea>
        </div>
        <button type="submit" className={styles.botonEnviar}>Enviar</button>
      </form>
    </div>
  );
};

export default FormularioSass;

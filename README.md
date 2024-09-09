# Plan de carrera - SHIFTA

## Consolidación Ssr

En este proyecto se irán subiendo distintos ejercicios pedidos para consolidar como desarrollador Ssr en SHIFTA

Listado de ejercicios: 
- 01: Metodología BEM y Arquitecturas CSS (ITCSS, SMACSS, Atomic Design:
  - Saber estructurar los estilos de un proyecto en combinación con BEM utilizando Sass
- 02: Gestor global de estados (Redux, Redux toolkit, etc):
  - Gestionar de manera efectiva y eficaz los estados para diferentes features
  - Trabajar los estados en proyectos mediana complejidad que requieran mucho dinamismo, de forma consistente y a escala
- 03: Accesibilidad:
  - Diseño de interfaces que sean totalmente navegables con el teclado.
  - Uso, en al menos un proyecto, de TalkBack/VoiceOver
- 04: CSS:
  - Ser capaz de construir un sistema de diseño básico siguiendo el concepto "utility-first" utilizando Sass u otro preprocesador CSS.
  - Ser capaz de configurar un sistema de diseño en Tailwind CSS.
- 05: Conceptos, tecnologías y técnicas:
  - Aplicar algunos de los conceptos tecnológicos mencionados
  - Uso de alguna librería de formularios como React Hook Forms o FormiK- 

## Cómo ejecutar

1. Clonar este repositorio
2. Navegar al directorio del proyecto
3. Instalar dependencias
   
    ```sh
    npm install
    ```
4. Correr proyecto
   
    ```sh
    npm run dev
    ```

## Estructura del Proyecto

El proyecto está dividido en diferentes POCs, cada uno con su propia página y componentes correspondientes.

- 01-BEM con Sass: Se encuentra en la página pages/bem.tsx.
- 02-Redux: Implementación básica de manejo de estado global con Redux Toolkit, disponible en la página pages/redux.tsx.
- 03-Accesibilidad: Demostración de navegación accesible por teclado y lectores de pantalla (TalkBack/VoiceOver) en pages/accesibilidad.tsx.
- 04-CSS y Tailwind: Comparación entre un sistema de diseño creado con Sass y Tailwind CSS en pages/css.tsx.

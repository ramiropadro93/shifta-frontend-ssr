import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4 px-6">
            <div className="mx-auto flex justify-between">
                <div className="text-white text-2xl font-bold">
                    <Link href="/">Resolución de problemas Frontend - SHIFTA </Link>
                </div>
                <div className="space-x-4 relative">
                    <Link
                        href="/inicio"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/bem"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        BEM y SASS
                    </Link>

                    <Link
                        href="/redux"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        Redux
                    </Link>
                    <Link
                        href="/accesibilidad"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        Accesibilidad
                    </Link>
                    <Link
                        href="/css"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        Css
                    </Link>
                    <Link
                        href="/formulario"
                        className="text-gray-300 hover:text-white transition duration-300"
                    >
                        Conceptos/Tecnologías/Técnicas
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <>
    <Navbar />
    <br />
    <Component {...pageProps} />;
    </>
}

export default MyApp;

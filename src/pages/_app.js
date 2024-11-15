import "@/styles/globals.css";

import { ProveedorUno } from './context/ContextoUno';
import { ProveedorDos } from './context/ContextoDos';
import { ProveedorTres } from './context/ContextoTres';

function MyApp({ Component, pageProps }) {
    return (
        <ProveedorUno>
            <ProveedorDos>
                <ProveedorTres>
                    <Component {...pageProps} />
                </ProveedorTres>
            </ProveedorDos>
        </ProveedorUno>
    );
}

export default MyApp;

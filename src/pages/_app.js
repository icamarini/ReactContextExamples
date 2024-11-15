import "@/styles/globals.css";

import { ProveedorGlobal } from './context/contexto'; // Importar el proveedor

function MyApp({ Component, pageProps }) {
    return (
        <ProveedorGlobal>
            <Component {...pageProps} />
        </ProveedorGlobal>
    );
}

export default MyApp;

import { createContext, useState } from 'react';

export const ContextoUno = createContext();

export function ProveedorUno({ children }) {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    return (
        <ContextoUno.Provider value={{ contador1, setContador1, contador2, setContador2 }}>
            {children}
        </ContextoUno.Provider>
    );
}

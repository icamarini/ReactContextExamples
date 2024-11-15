import { createContext, useState } from 'react';

export const ContextoTres = createContext();

export function ProveedorTres({ children }) {
    const [contador5, setContador5] = useState(0);
    const [contador6, setContador6] = useState(0);

    return (
        <ContextoTres.Provider value={{ contador5, setContador5, contador6, setContador6 }}>
            {children}
        </ContextoTres.Provider>
    );
}

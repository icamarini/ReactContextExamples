import { createContext, useState } from 'react';

export const ContextoDos = createContext();

export function ProveedorDos({ children }) {
    const [contador3, setContador3] = useState(0);
    const [contador4, setContador4] = useState(0);

    return (
        <ContextoDos.Provider value={{ contador3, setContador3, contador4, setContador4 }}>
            {children}
        </ContextoDos.Provider>
    );
}

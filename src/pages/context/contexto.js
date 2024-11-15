import { createContext, useState } from 'react';

export const memoriaGlobal = createContext(); // Declaración

export function ProveedorGlobal({ children }) {
    const [estadoA, setEstadoA] = useState(0);
    const [estadoB, setEstadoB] = useState("Hola");

    return (
        <memoriaGlobal.Provider value={{ estadoA, setEstadoA, estadoB, setEstadoB }}>
            {children}
        </memoriaGlobal.Provider>
    );
}

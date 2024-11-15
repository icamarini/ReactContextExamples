import { useContext } from 'react';

import { memoriaGlobal } from '../context/contexto'; // Importamos el contexto

function BotonIncrementar() {
    const { estadoA, setEstadoA } = useContext(memoriaGlobal); // Accedemos al contexto

    return (
        <button onClick={() => setEstadoA(estadoA + 1)}>
            Incrementar Estado A
        </button>
    );
}

export default BotonIncrementar;

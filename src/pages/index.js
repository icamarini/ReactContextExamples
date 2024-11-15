import { useContext } from 'react';
import { memoriaGlobal } from './context/contexto';
import BotonIncrementar from './components/BotonIncrementar';

function HomePage() {
    const { estadoA, setEstadoA, estadoB, setEstadoB } = useContext(memoriaGlobal);

    return (
        <div>
            <h1>Página Principal</h1>
            <p>Estado A: {estadoA}</p>
            <p>Estado B: {estadoB}</p>
            <button onClick={() => setEstadoA(estadoA + 1)}>Incrementar Estado A</button>
            <button onClick={() => setEstadoA(estadoA - 1)}>Decrementar Estado A</button>
            <button onClick={() => setEstadoB("¡Nuevo valor para Estado B!")}> Cambiar Estado B </button>

            <BotonIncrementar />
        </div>
    );
}

export default HomePage;

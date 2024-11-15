import { useContext } from 'react';

import { ContextoUno } from '../context/ContextoUno';

function Contador1() {
    const { contador1, setContador1 } = useContext(ContextoUno);

    return (
        <div>
            <p>Contador 1: {contador1}</p>
            <button onClick={() => setContador1(contador1 + 1)}>Incrementar Contador 1</button>
        </div>
    );
}

export default Contador1;

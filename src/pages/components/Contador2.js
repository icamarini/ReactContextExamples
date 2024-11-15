import { useContext } from 'react';

import { ContextoUno } from '../context/ContextoUno';
import { ContextoDos } from '../context/ContextoDos';

function Contador2() {
    const { contador2, setContador2 } = useContext(ContextoUno);

    return (
        <div>
            <p>Contador 2: {contador2}</p>
            <button onClick={() => setContador2(contador2 + 1)}>Incrementar Contador 1</button>
        </div>
    );
}

export default Contador2;

import { useContext } from 'react';

import { ContextoTres } from '../context/ContextoTres';

function Contador6() {
    const { contador6, setContador6 } = useContext(ContextoTres);

    return (
        <div>
            <p>Contador 6: {contador6}</p>
            <button onClick={() => setContador6(contador6 + 1)}>Incrementar Contador 6</button>
        </div>
    );
}

export default Contador6;

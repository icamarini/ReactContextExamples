import { useContext } from 'react';

import { ContextoTres } from '../context/ContextoTres';

function Contador5() {
    const { contador5, setContador5 } = useContext(ContextoTres);

    return (
        <div>
            <p>Contador 5: {contador5}</p>
            <button onClick={() => setContador5(contador5 + 1)}>Incrementar Contador 5</button>
        </div>
    );
}

export default Contador5;

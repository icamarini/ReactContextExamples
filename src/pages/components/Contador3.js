import { useContext } from 'react';

import { ContextoDos } from '../context/ContextoDos';

function Contador3() {
    const { contador3, setContador3 } = useContext(ContextoDos);

    return (
        <div>
            <p>Contador 3: {contador3}</p>
            <button onClick={() => setContador3(contador3 + 1)}>Incrementar Contador 3</button>
        </div>
    );
}

export default Contador3;

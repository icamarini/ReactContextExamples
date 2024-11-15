import { useContext } from 'react';

import { ContextoDos } from '../context/ContextoDos';

function Contador4() {
    const { contador4, setContador4 } = useContext(ContextoDos);

    return (
        <div>
            <p>Contador 4: {contador4}</p>
            <button onClick={() => setContador4(contador4 + 1)}>Incrementar Contador 4</button>
        </div>
    );
}

export default Contador4;

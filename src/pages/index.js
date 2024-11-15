import Contador1 from './components/Contador1';
import Contador2 from './components/Contador2';
import Contador3 from './components/Contador3';
import Contador4 from './components/Contador4';
import Contador5 from './components/Contador5';
import Contador6 from './components/Contador6';


function HomePage() {
    return (
        <div>
            <h1>Contadores por Contextos</h1>
            <div>
                <Contador1 />                
                <Contador2 />
                <Contador3 />
                <Contador4 />
                <Contador5 />
                <Contador6 />
                
            </div>
        </div>
    );
}

export default HomePage;


import './App.css';
import Timer from './components/Timer';
import Header from './components/Header';
import { useState } from 'react';

function App() {
    const [isWorking, setIsWorking] = useState(true);

    console.log(isWorking);
    

    return (
        <div className={`h-screen transition-colors duration-500 ${isWorking ? 'bg-blue-900' : 'bg-green-700'} text-white`}>
            <Header/>
            <Timer isWorking={isWorking} setIsWorking={setIsWorking}/>
        </div>
    );
}

export default App;

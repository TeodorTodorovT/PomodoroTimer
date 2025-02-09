import './App.css';
import Timer from './components/Timer';
import Header from './components/Header';
import { useState } from 'react';

function App() {
const [sessionType, setSessionType] = useState('work');

    return (
        <div className={`h-screen transition-colors duration-500 ${sessionType === 'work' ? 'bg-blue-900' : 'bg-green-700'} text-white`}>
            <Header sessionType={sessionType} setSessionType={setSessionType}/>
            <Timer sessionType={sessionType} setSessionType={setSessionType}/>
        </div>
    );
}

export default App;

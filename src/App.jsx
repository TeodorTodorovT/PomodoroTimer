import './App.css';
import Timer from './components/Timer';
import Header from './components/Header';
import usePomodoro from './hooks/usePomodoro';

function App() {
    const {timer, isRunning, isWorking, toggleTimer, toggleState} =
        usePomodoro();
        
    

    return (
        <div
            className={`h-screen transition-colors duration-500 ${
                isWorking ? 'bg-blue-900' : 'bg-green-700'
            } text-white`}
        >
            <Header />
            <Timer
                timer={timer}
                isRunning={isRunning}
                isWorking={isWorking}
                toggleTimer={toggleTimer}
                toggleState={toggleState}
            />
        </div>
    );
}

export default App;

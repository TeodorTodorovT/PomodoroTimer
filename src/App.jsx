import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [sessionType, setSessionType] = useState('work');

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            const countdownInterval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(countdownInterval);
        }

        if (timeLeft === 0) {
            setIsRunning(false);
            setSessionType((prevType) => {
                setTimeLeft(prevType === 'work' ? 5 * 60 : 25 * 60);
                return prevType === 'work' ? 'break' : 'work';
            });
        }
    }, [isRunning, timeLeft]);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const toggleSession = () => {
        setSessionType((prevType) => {
            setTimeLeft(prevType === 'work' ? 5 * 60 : 25 * 60);
            return prevType === 'work' ? 'break' : 'work';
        });
        setIsRunning(false);
    };

    return (
        <div className="flex flex-col items-center text-3xl font-bold">
            <p>{`${
                Math.floor(timeLeft / 60) > 9
                    ? Math.floor(timeLeft / 60)
                    : `0${Math.floor(timeLeft / 60)}`
            }:${timeLeft % 60 > 9 ? timeLeft % 60 : `0${timeLeft % 60}`}`}</p>
            <div className='flex flex-col'>
            <button onClick={toggleTimer}>
                {isRunning ? 'Stop' : 'Start'}
            </button>

            <button onClick={toggleSession}>
                {sessionType === 'work' ? 'Break' : 'Work'}
            </button>
            </div>
            <p>Current Session: {sessionType.toUpperCase()}</p>
        </div>
    );
}

export default App;

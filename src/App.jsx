import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const countdownInterval = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        // Stop at 0
                        setIsRunning(false);

                        return 25 * 60;
                    }
                    return prevTime - 1;
                });
            }, 1000);

            return () => clearInterval(countdownInterval);
        }
    }, [isRunning]);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    return (
        <div className="text-center text-3xl font-bold">
            <p>{`${
                Math.floor(timeLeft / 60) > 9
                    ? Math.floor(timeLeft / 60)
                    : `0${Math.floor(timeLeft / 60)}`
            }:${timeLeft % 60 > 9 ? timeLeft % 60 : `0${timeLeft % 60}`}`}</p>
            <button onClick={toggleTimer}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
        </div>
    );
}

export default App;

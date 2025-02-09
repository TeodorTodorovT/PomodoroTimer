import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ sessionType, setSessionType }) => {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            const countdownInterval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(countdownInterval);
        }

        if (timeLeft === 0 && isRunning) {
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
        <div className="flex flex-col items-center">
            <p className='text-8xl md:text-9xl'>{`${
                Math.floor(timeLeft / 60) > 9
                    ? Math.floor(timeLeft / 60)
                    : `0${Math.floor(timeLeft / 60)}`
            }:${timeLeft % 60 > 9 ? timeLeft % 60 : `0${timeLeft % 60}`}`}</p>
            <div className="flex flex-col p-4 gap-5">
                <button onClick={toggleTimer} className={`bg-white ${sessionType === 'work' ? 'text-blue-900' : 'text-green-700'} p-4 text-3xl font-bold rounded-lg w-32`}>
                    {isRunning ? 'Pause' : 'Start'}
                </button>

                <button onClick={toggleSession} className={`bg-white ${sessionType === 'work' ? 'text-blue-900' : 'text-green-700'} p-2 text-xl font-bold rounded-lg`}>
                    {sessionType === 'work' ? 'Break' : 'Work'}
                </button>
            </div>
        </div>
    );
};

Timer.propTypes = {
    sessionType: PropTypes.oneOf(['work', 'break']).isRequired,
    setSessionType: PropTypes.func.isRequired,
};

export default Timer;

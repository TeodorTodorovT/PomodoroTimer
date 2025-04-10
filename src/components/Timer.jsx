import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ isWorking, setIsWorking}) => {
    const [timer, setTimer] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(true);


    useEffect(() => {
        if(isRunning){
            const timerInterval = setInterval(() => {
                setTimer((t) => t - 1);
            }, 1000);
    
            return () => {
                clearInterval(timerInterval);
            };
        }



    }, [isRunning]);

    useEffect(() => {
        if(isRunning && timer === 0){
            if(isWorking){
                setTimer(5 * 60);
            }else{
                setTimer(25 * 60);
            }

            setIsWorking((prev) => {
                setTimer(prev ? 5 * 60 : 25 * 60);
                return !prev;
              });
        }
    }, [isRunning, isWorking, setIsWorking, timer])
    

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const toggleState = () => {
        if(isWorking){
            setTimer(5 * 60);
        }else{
            setTimer(25 * 60);
        }
        setIsWorking(!isWorking)
        setIsRunning(true)
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className='text-8xl md:text-[300px]'>{`${
                Math.floor(timer / 60) > 9
                    ? Math.floor(timer / 60)
                    : `0${Math.floor(timer / 60)}`
            }:${timer % 60 > 9 ? timer % 60 : `0${timer % 60}`}`}</p>
            <div className="flex flex-col p-4 gap-5 mt-16">
                <button onClick={toggleTimer} className={`bg-white ${isWorking ? 'text-blue-900' : 'text-green-700'} p-6 text-3xl font-bold rounded-lg w-32`}>
                    {isRunning ? 'Pause' : 'Start'}
                </button>

                <button onClick={toggleState} className={`bg-white ${isWorking ? 'text-blue-900' : 'text-green-700'} p-4 text-xl font-bold rounded-lg`}>
                    {isWorking ? 'Break' : 'Work'}
                </button>
            </div>
        </div>
    );
};

Timer.propTypes = {
    isWorking: PropTypes.oneOf(['work', 'break']).isRequired,
    setIsWorking: PropTypes.func.isRequired,
};

export default Timer;

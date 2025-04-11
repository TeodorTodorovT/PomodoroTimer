import PropTypes from 'prop-types';
import { formatTime } from '../utils/formatTime';

const Timer = ({timer, isRunning, isWorking, toggleTimer, toggleState}) => {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-8xl md:text-[300px]">{formatTime(timer)}</p>
            <div className="flex flex-col p-4 gap-5 mt-16">
                <button
                    onClick={toggleTimer}
                    className={`bg-white ${
                        isWorking ? 'text-blue-900' : 'text-green-700'
                    } p-6 text-4xl font-bold rounded-lg`}
                >
                    {isRunning ? 'PAUSE' : 'START'}
                </button>

                <button
                    onClick={toggleState}
                    className={`bg-white ${
                        isWorking ? 'text-blue-900' : 'text-green-700'
                    } p-4 text-xl font-bold rounded-lg`}
                >
                    {isWorking ? 'BREAK' : 'WORK'}
                </button>
            </div>
        </div>
    );
};

Timer.propTypes = {
    timer: PropTypes.number.isRequired,
    isRunning: PropTypes.bool.isRequired,
    isWorking: PropTypes.bool.isRequired,
    toggleTimer: PropTypes.func.isRequired,
    toggleState: PropTypes.func.isRequired,
};

export default Timer;

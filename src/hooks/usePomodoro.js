import { useReducer, useEffect } from 'react';
import { pomodoroReducer, initialState } from '../reducers/pomodoroReducer';

const usePomodoro = () => {
    const [state, dispatch] = useReducer(pomodoroReducer, initialState)

    useEffect(() => {
        if (state.isRunning) {
            const timerInterval = setInterval(() => {
                dispatch({type: 'TICK'})
            }, 1000);

            return () => {
                clearInterval(timerInterval);
            };
        }
    }, [state.isRunning]);

    useEffect(() => {
        if (state.isRunning && state.timer === 0) {
            dispatch({type: 'SESSION_COMPLETE'})            
        }
    }, [state.isRunning, state.timer]);

    const toggleTimer = () => dispatch({type: 'TOGGLE_RUNNING'})
    const toggleState = () => dispatch({type: 'TOGGLE_SESSION'})

    return {timer: state.timer, isRunning: state.isRunning, isWorking: state.isWorking, toggleTimer, toggleState};
};

export default usePomodoro;

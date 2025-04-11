export const initialState = {
    timer: 25 * 60,
    isRunning: true,
    isWorking: true,
};

export const pomodoroReducer = (state, action) => {
    switch (action.type) {
        case 'TICK':
            return {
                ...state,
                timer: state.timer > 0 ? state.timer - 1 : 0,
            };
        case 'SESSION_COMPLETE': {
            return {
                ...state,
                timer: state.isWorking ? 5 * 60 : 25 * 60,
                isWorking: !state.isWorking,
            };
        }
        case 'TOGGLE_SESSION': {
            return {
                ...state,
                isWorking: !state.isWorking,
                timer: state.isWorking ? 5 * 60 : 25 * 60,
            };
        }
        case 'TOGGLE_RUNNING': {
            return {
                ...state,
                isRunning: !state.isRunning,
            };
        }
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

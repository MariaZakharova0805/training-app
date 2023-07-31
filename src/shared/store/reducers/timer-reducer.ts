import { ITimerData, TimerAction, TimerActionTypes } from "../../types/timer";

const initialState: ITimerData = {
    timeGo: false,
    hours: 0,
    minutes: 0,
    seconds: 0
}

export const timerReducer = (state: ITimerData = initialState, action: TimerAction): ITimerData => {
    switch (action.type) {
        case TimerActionTypes.SET_TIMER_START:
            return { ...state, timeGo: action.payload }
        case TimerActionTypes.SET_TIMER_HOURS:
            return { ...state, hours: action.payload }
        case TimerActionTypes.SET_TIMER_MINUTES:
            return { ...state, minutes: action.payload }
        case TimerActionTypes.SET_TIMER_SECONDS:
            return { ...state, seconds: action.payload }
        default:
            return state;
    }
}

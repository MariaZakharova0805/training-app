import { Dispatch } from "redux"
import { TimerAction, TimerActionTypes } from "../../types/timer"


export const timerStart = (timer: boolean) => {
    return (dispatch: Dispatch<TimerAction>) => {
        dispatch({ type: TimerActionTypes.SET_TIMER_START, payload: timer })
    }
}

export const setHours = (hours: number) => {
    return (dispatch: Dispatch<TimerAction>) => {
        dispatch({ type: TimerActionTypes.SET_TIMER_HOURS, payload: hours })
    }
}
export const setMinutes = (mins: number) => {
    return (dispatch: Dispatch<TimerAction>) => {
        dispatch({ type: TimerActionTypes.SET_TIMER_MINUTES, payload: mins })
    }
}
export const setSeconds = (sec: number) => {
    return (dispatch: Dispatch<TimerAction>) => {
        dispatch({ type: TimerActionTypes.SET_TIMER_SECONDS, payload: sec })
    }
}



export interface ITimerData {
    timeGo: boolean;
    hours: number
    minutes: number;
    seconds: number;
}

export enum TimerActionTypes {
    SET_TIMER_START = 'SET_TIMER_START',
    SET_TIMER_HOURS = 'SET_TIMER_HOURS',
    SET_TIMER_MINUTES = 'SET_TIMER_MINUTES',
    SET_TIMER_SECONDS = 'SET_TIMER_SECONDS',
}

export interface ISetTimerGoAction {
    type: TimerActionTypes.SET_TIMER_START;
    payload: boolean;
}
export interface ISetTimerHoursAction {
    type: TimerActionTypes.SET_TIMER_HOURS;
    payload: number;
}
export interface ISetTimerMinutesAction {
    type: TimerActionTypes.SET_TIMER_MINUTES;
    payload: number;
}
export interface ISetTimerSecondsAction {
    type: TimerActionTypes.SET_TIMER_SECONDS;
    payload: number;
}

export type TimerAction = ISetTimerGoAction | ISetTimerHoursAction | ISetTimerMinutesAction | ISetTimerSecondsAction

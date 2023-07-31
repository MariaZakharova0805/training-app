
export interface IAlertState {
    opened: boolean;
}

export enum AlertActionTypes {
    OPEN_ALERT = 'OPEN_ALERT',
}

export interface IOpenAction {
    type: AlertActionTypes.OPEN_ALERT;
    payload: boolean;
}


export type AlertAction = IOpenAction 

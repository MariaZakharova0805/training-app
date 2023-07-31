import { IAlertState, AlertActionTypes, AlertAction } from "../../types/alert";

const initialState: IAlertState = {
    opened: false,
}

export const alertReducer = (state: IAlertState = initialState, action: AlertAction): IAlertState => {
    switch (action.type) {
        case AlertActionTypes.OPEN_ALERT:
            return { opened: action.payload }

        default:
            return state;
    }
}




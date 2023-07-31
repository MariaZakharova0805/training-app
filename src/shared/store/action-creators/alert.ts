import { AlertAction, AlertActionTypes } from '../../types/alert';
import { Dispatch } from 'redux';

export const showAlert = (meaning: boolean) => {
    return (dispatch: Dispatch<AlertAction>) => {
        dispatch({ type: AlertActionTypes.OPEN_ALERT, payload: meaning })
    }
}
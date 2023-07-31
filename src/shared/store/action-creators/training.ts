import { TrainingAction, TrainingActionTypes } from '../../types/training';
import { Dispatch } from 'redux';

export const setTrainingType = (trainingType: string) => {
    return (dispatch: Dispatch<TrainingAction>) => {
        dispatch({ type: TrainingActionTypes.SET_TRAININGT_TYPE, payload: trainingType })
    }
}
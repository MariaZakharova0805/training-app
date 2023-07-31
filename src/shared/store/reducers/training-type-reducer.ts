import { ITrainingData, TrainingAction, TrainingActionTypes } from "../../types/training";

const initialState: ITrainingData = {
    trainingType: '',
}

export const trainingReducer = (state: ITrainingData = initialState, action: TrainingAction): ITrainingData => {
    switch (action.type) {
        case TrainingActionTypes.SET_TRAININGT_TYPE:
            return { trainingType: action.payload }
        default:
            return state;
    }
}

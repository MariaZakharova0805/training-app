export interface ITrainingData {
    trainingType: string;
}

export enum TrainingActionTypes {
    SET_TRAININGT_TYPE = 'SET_TRAININGT_TYPE',
}

export interface ISetTraininAction {
    type: TrainingActionTypes.SET_TRAININGT_TYPE;
    payload: string;
}

export type TrainingAction = ISetTraininAction

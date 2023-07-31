
export interface ITrainingData {
    id: number;
    name: string;
    img:string;
    weightInfo: number[];
    waistInfo: number[];
    hipsInfo: number[];
    bicepsInfo:number[];
    lastDate: string;
    trainingType: string;
    trainingTime: number[];
    points:number;
}

export interface IUserState {
    trainingData: ITrainingData[];
    loading: boolean;
    error: string | null;
    newUserAuth: boolean;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    ADD_USERS_DATA = 'ADD_USERS_DATA',
    OPEN_START_WINDOW = 'OPEN_START_WINDOW',
    CLEAR_STORE = 'CLEAR_STORE',
}

export interface IFetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

export interface IFetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: ITrainingData;
}

export interface IFetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export interface IAddUserDataAction {
    type: UserActionTypes.ADD_USERS_DATA;
    payload: ITrainingData;
}

export interface IOpenWindow {
    type: UserActionTypes.OPEN_START_WINDOW;
}
export interface IClearStore{
    type: UserActionTypes.CLEAR_STORE;
}

export type UserAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction | IAddUserDataAction | IOpenWindow | IClearStore

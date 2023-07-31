import { IUserState, UserActionTypes, UserAction } from "../../types/user";

const initialState: IUserState = {
    trainingData: [],
    loading: false,
    error: null,
    newUserAuth: false
}

export const userReducer = (state: IUserState = initialState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return { loading: true, error: null, trainingData: [], newUserAuth: false }

        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, trainingData: [...state.trainingData, action.payload], newUserAuth: false }

        case UserActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, trainingData: [], newUserAuth: false }

        case UserActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, trainingData: [], newUserAuth: false }

        case UserActionTypes.OPEN_START_WINDOW:
            return { loading: false, error: null, trainingData: [], newUserAuth: true }

        //Очистка хранилища
        case UserActionTypes.CLEAR_STORE:
            return { loading: false, error: null, trainingData: [], newUserAuth: true }

        //Добавление данных о пользователе
        case UserActionTypes.ADD_USERS_DATA:
            return { loading: false, error: null, trainingData: [...state.trainingData, action.payload], newUserAuth: false }

        default:
            return state;
    }
}




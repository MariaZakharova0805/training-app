import { UserAction, UserActionTypes } from '../../types/user';
import { Dispatch } from 'redux';

export const fetchUsers = () => {
    return (dispatch: Dispatch<UserAction>) => {
        try {
            //Проверка хранилища
            dispatch({ type: UserActionTypes.FETCH_USERS })
            const response = JSON.parse(localStorage.getItem('trainingData') || '');
            //Если хранилище пустое - то запускаем окно регистрации
            if (response) {
                dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response })
            } else {
                dispatch({ type: UserActionTypes.OPEN_START_WINDOW })
            }
        }
        catch (e) {
            dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка при загрузке пользователей' })
        }
    }
}

export const addUsersData = (trainingData: any) => {
    return (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.ADD_USERS_DATA, payload: trainingData })
            localStorage.setItem('trainingData', JSON.stringify(trainingData))
        }
        catch (e) {
            dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка при сохранении данных пользователя' })
        }
    }
}

export const clearUserData = () => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({ type: UserActionTypes.CLEAR_STORE })
        localStorage.removeItem('trainingData')

    }
}


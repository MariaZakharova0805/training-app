import { combineReducers } from "redux";
import { userReducer } from "./user-reducer";
import {alertReducer} from './alert-reducer'
import { trainingReducer } from "./training-type-reducer";
import { timerReducer } from "./timer-reducer";

//Инициализация combineReducers, чтобы подключить к store несколько редьюсеров сразу
export const rootReducer = combineReducers({
    users: userReducer,
    alert: alertReducer,
    trainging: trainingReducer,
    timer: timerReducer,
})

//с помощью TS-овского ReturnType получаем тип нашего rootReducer
//с помщью типа RootState мы можем сделать хук, который будет работать с типизированным useSelector
export type RootState = ReturnType<typeof rootReducer>
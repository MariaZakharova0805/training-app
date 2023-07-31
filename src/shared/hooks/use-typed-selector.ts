import { RootState } from "../store/reducers";
import { TypedUseSelectorHook, useSelector } from "react-redux"

//с помщью типа RootState мы можем сделать хук, который будет работать с типизированным useSelector
// этот тот же самый useSelector, но работающий с типами:
export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector;
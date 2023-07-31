
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';

//создаем стор: 1й парамтер - коневой редьюсер, 2й- миддлвэр для ассинхронных действий
export const store = createStore(rootReducer, applyMiddleware(thunk))
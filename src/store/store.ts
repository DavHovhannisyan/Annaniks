import {createStore, Store, applyMiddleware} from 'redux';
import {createWrapper, Context} from 'next-redux-wrapper';
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import watchers from "./sagas/watchers";


const makeStore = (context: Context) => {
    const sagaMiddleware = createSagaMiddleware()

    const store: any = createStore(rootReducer, applyMiddleware(sagaMiddleware),)

    store.sagaTask = sagaMiddleware.run(watchers)

    return store
}

export const wrapper = createWrapper<Store<any>>(makeStore, {debug: false});

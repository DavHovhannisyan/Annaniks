import {AnyAction, combineReducers} from "redux";
import {HYDRATE} from "next-redux-wrapper";

const appReducer = combineReducers({

})

const rootReducer = (state:any, action:AnyAction) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        }
    }

    return appReducer(state, action)
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
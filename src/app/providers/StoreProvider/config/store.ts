import { PreloadedState, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { RootState } from "./types";

export function createReduxStore(preloadedState?: PreloadedState<RootState>) {
    const rootReducers: ReducersMapObject<RootState> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState,
    });
    //@ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

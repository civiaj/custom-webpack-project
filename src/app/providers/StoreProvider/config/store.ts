import {
    PreloadedState,
    combineReducers,
    configureStore,
} from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";

const rootReducer = combineReducers({
    counter: counterReducer,
});

export function createReduxStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];

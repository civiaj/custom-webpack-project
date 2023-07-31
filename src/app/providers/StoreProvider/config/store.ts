import {
    PreloadedState,
    combineReducers,
    configureStore,
} from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
});

export function createReduxStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        devTools: true, // __IS_DEV__ - пока поменял на true потому что не пока не понимаю как в стори тест прокинуть эту переменную
        preloadedState,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];

import {
    CombinedState,
    Reducer,
    ReducersMapObject,
    configureStore,
} from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { $api } from "shared/api/api";
import { createReducerManager } from "./reducerManager";
import { RootState } from "./types";
import { scrollRestorationReducer } from "features/ScrollRestoration";

export function createReduxStore(
    preloadedState?: RootState,
    asyncReducers?: ReducersMapObject<RootState>
) {
    const rootReducers: ReducersMapObject<RootState> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollRestoration: scrollRestorationReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<RootState>>,
        devTools: __IS_DEV__,
        preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }),
    });
    //@ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

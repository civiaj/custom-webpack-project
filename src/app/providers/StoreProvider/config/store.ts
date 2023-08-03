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
import { NavigateOptions, To } from "react-router-dom";

export function createReduxStore(
    preloadedState?: RootState,
    asyncReducers?: ReducersMapObject<RootState>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<RootState> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
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
                        // чтобы использовать navigate в thunk надо, чтобы
                        // store был обернут в router provider, для этого нужно
                        // переделать весь роутер, мне лень, поэтому, как обычно,
                        // используем navigate в компонентах
                        navigate,
                    },
                },
            }),
    });
    //@ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

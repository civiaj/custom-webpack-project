import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { createReduxStore } from "./store";
import { ProfileSchema } from "entities/Profile";

export type RootState = {
    counter: CounterSchema;
    user: UserSchema;
    // async
    login?: LoginSchema;
    profile?: ProfileSchema;
};

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];

export type RootStateKey = keyof RootState;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<RootState>;
    reduce: (state: RootState, action: AnyAction) => CombinedState<RootState>;
    add: (key: RootStateKey, reducer: Reducer) => void;
    remove: (key: RootStateKey) => void;
}

export interface RootStateWithManager extends EnhancedStore<RootState> {
    reducerManager?: ReducerManager;
}

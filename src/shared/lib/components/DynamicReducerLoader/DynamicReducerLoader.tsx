import { Reducer } from "@reduxjs/toolkit";
import { RootStateKey, RootStateWithManager, useAppDispatch } from "app/providers/StoreProvider";
import { ReactNode, useEffect } from "react";
import { useStore } from "react-redux";

export type ReducerList = {
    [name in RootStateKey]?: Reducer;
};

type ReducerListEmtry = [RootStateKey, Reducer];

interface DynamicReducerLoaderProps {
    children: ReactNode;
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicReducerLoader = (props: DynamicReducerLoaderProps) => {
    const { children, reducers, removeAfterUnmount = true } = props;
    const store = useStore() as RootStateWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]: ReducerListEmtry) => {
            store.reducerManager.add(reducerName, reducer);
            dispatch({ type: `@INIT ${reducerName} REDUCER` });
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerName]: ReducerListEmtry) => {
                    store.reducerManager.remove(reducerName);
                    dispatch({ type: `@DESTROY ${reducerName} REDUCER` });
                });
            }
        };
        //eslint-disable-next-line
    }, []);

    return children;
};

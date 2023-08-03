import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { RootState } from "../config/types";
import { ReducersMapObject } from "@reduxjs/toolkit";

interface StoreProviderProps {
    children: ReactNode;
    preloadedState?: DeepPartial<RootState>;
    asyncReducers?: DeepPartial<ReducersMapObject<RootState>>;
}

export function StoreProvider(props: StoreProviderProps) {
    const { children, preloadedState, asyncReducers } = props;

    const store = createReduxStore(
        preloadedState as RootState,
        asyncReducers as ReducersMapObject<RootState>
    );
    return <Provider store={store}>{children}</Provider>;
}

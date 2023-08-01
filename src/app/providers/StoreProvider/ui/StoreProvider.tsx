import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { RootState } from "../config/types";

interface StoreProviderProps {
    children: ReactNode;
    preloadedState?: RootState;
}

export function StoreProvider(props: StoreProviderProps) {
    const { children, preloadedState } = props;
    const store = createReduxStore(preloadedState);
    return <Provider store={store}>{children}</Provider>;
}

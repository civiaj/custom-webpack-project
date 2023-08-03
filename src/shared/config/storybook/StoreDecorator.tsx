import { ReducersMapObject } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { RootState, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducerList } from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";

const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
};

export const StoreDecorator =
    (
        preloadedState: DeepPartial<RootState>,
        asyncReducers?: DeepPartial<ReducersMapObject<RootState>>
    ) =>
    (Story: StoryFn) => {
        return (
            <StoreProvider
                preloadedState={preloadedState as RootState}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
    };

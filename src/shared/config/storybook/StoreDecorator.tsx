import { ReducersMapObject } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { RootState, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from "entities/Article/model/slice/articleSlice";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducerList } from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";

const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
    articleDetails: articleDetailsReducer,
    profile: profileReducer,
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

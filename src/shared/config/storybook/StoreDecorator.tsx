import { ReducersMapObject } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { RootState, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from "entities/Article";
import { profileReducer } from "entities/Profile";
import { addCommentFormReducer } from "features/AddCommentForm";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducerList } from "shared/lib/components/DynamicReducerLoader/DynamicReducerLoader";

const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
    articleDetails: articleDetailsReducer,
    profile: profileReducer,
    addCommentForm: addCommentFormReducer,
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

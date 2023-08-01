import { DeepPartial } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { RootState, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator = (preloadedState: DeepPartial<RootState>) => (Story: StoryFn) => {
    return (
        <StoreProvider preloadedState={preloadedState as RootState}>
            <Story />
        </StoreProvider>
    );
};

import { StoryFn } from "@storybook/react";
import { StoreProvider } from "app/providers/StoreProvider";

export function StoreDecorator(Story: StoryFn) {
    return (
        <StoreProvider
            preloadedState={{
                counter: { value: 10 },
                user: { authDate: { id: "test", username: "Test" } },
            }}
        >
            <Story />
        </StoreProvider>
    );
}

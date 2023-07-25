import { StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
    return (
        <div className={`app ${theme}`} style={{ minHeight: "max-content" }}>
            <Story />
        </div>
    );
};

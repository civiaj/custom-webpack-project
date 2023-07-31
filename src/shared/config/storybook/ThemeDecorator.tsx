import { StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import cls from "./ThemesForTest.module.scss";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
    return (
        <div className={`app ${cls[theme]}`}>
            <Story />
        </div>
    );
};

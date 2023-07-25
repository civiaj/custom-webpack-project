import type { Meta, StoryObj } from "@storybook/react";

import MainPage from "./MainPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "pages/MainPage",
    component: MainPage,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightThemeMainPage: Story = {
    args: {},
};

export const DarkThemeMainPage: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

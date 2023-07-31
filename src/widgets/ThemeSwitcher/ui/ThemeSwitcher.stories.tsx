import type { Meta, StoryObj } from "@storybook/react";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "widget/ThemeSwitcher",
    component: ThemeSwitcher,
    parameters: {
        layout: "fullsceen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightThemeThemeSwitcher: Story = {
    args: {},
};

export const DarkThemeThemeSwitcher: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

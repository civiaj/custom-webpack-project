import type { Meta, StoryObj } from "@storybook/react";

import { AppButton, AppButtonTheme } from "./AppButton";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/AppButton",
    component: AppButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof AppButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightThemeBtn: Story = {
    args: {
        children: "Button",
    },
};

export const DarkThemeBtn: Story = {
    args: {
        children: "Button",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearBtn: Story = {
    args: {
        children: "Button",
        theme: AppButtonTheme.CLEAR,
    },
};

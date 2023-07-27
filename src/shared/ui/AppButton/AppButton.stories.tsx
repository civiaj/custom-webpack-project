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

export const IconButtonLight: Story = {
    args: {
        theme: AppButtonTheme.ICON,
    },
};

export const IconButtonDark: Story = {
    args: {
        theme: AppButtonTheme.ICON,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

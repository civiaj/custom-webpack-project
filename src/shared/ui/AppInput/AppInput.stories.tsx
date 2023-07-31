import type { Meta, StoryObj } from "@storybook/react";
import { AppInput } from "./AppInput";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/AppInput",
    component: AppInput,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof AppInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightThemeAppInput: Story = {
    args: {},
};

export const DarkThemeAppInput: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

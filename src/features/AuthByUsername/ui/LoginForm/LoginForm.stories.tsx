import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "feature/LoginForm",
    component: LoginForm,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginFormL: Story = {
    args: {},
};

export const LoginFormD: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

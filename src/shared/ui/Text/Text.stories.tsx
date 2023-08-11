import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Text",
    component: Text,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextL: Story = {
    args: {
        text: "text",
        title: "title",
    },
};

export const TextD: Story = {
    args: {
        text: "text",
        title: "title",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const TextErrorL: Story = {
    args: {
        theme: TextTheme.ERROR,
        text: "text",
        title: "title",
    },
};

export const TextErrorD: Story = {
    args: {
        theme: TextTheme.ERROR,
        text: "text",
        title: "title",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

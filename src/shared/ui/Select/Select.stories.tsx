import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Select",
    component: Select,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightThemeSelect: Story = {
    args: {
        label: "Select a value",
        id: "selector",
        options: [
            { content: "one", value: "1" },
            { content: "two", value: "2" },
            { content: "three", value: "3" },
        ],
    },
};

export const DarkThemeSelect: Story = {
    args: {
        label: "Select a value",
        id: "selector",
        options: [
            { content: "one", value: "1" },
            { content: "two", value: "2" },
            { content: "three", value: "3" },
        ],
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

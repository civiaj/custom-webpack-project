import type { Meta, StoryObj } from "@storybook/react";

import { Message, MessageTheme } from "./Message";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Message",
    component: Message,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Message>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MessageL: Story = {
    args: {
        text: "text",
        title: "title",
    },
};

export const MessageD: Story = {
    args: {
        text: "text",
        title: "title",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const MessageErrorL: Story = {
    args: {
        theme: MessageTheme.ERROR,
        text: "text",
        title: "title",
    },
};

export const MessageErrorD: Story = {
    args: {
        theme: MessageTheme.ERROR,
        text: "text",
        title: "title",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

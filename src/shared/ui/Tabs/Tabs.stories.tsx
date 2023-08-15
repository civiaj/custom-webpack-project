import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Tabs",
    component: Tabs,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TabsL: Story = {
    args: {},
};

export const TabsD: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

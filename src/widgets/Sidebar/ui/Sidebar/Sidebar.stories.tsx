import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Sidebar } from "./Sidebar";

const meta = {
    title: "widget/Sidebar",
    component: Sidebar,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SidebarL: Story = {
    args: {},
};

export const SidebarD: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

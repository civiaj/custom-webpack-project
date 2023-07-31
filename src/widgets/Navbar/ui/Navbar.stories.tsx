import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./Navbar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "widget/Navbar",
    component: Navbar,
    parameters: {
        layout: "fullsceen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightThemeNavbar: Story = {
    args: {},
};

export const DarkThemeNavbar: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

import type { Meta, StoryObj } from "@storybook/react";

import { AppLink } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/AppLink",
    component: AppLink,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {
        to: "",
        children: "Link",
    },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightThemeAppLink: Story = {
    args: {
        children: "Link to some place",
    },
};

export const DarkThemeAppLink: Story = {
    args: {
        children: "Link to some place",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

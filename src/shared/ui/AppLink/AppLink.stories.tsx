import type { Meta, StoryObj } from "@storybook/react";

import { AppLink } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/AppLink",
    component: AppLink,
    parameters: {
        layout: "centered",
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
    args: {},
};

export const DarkThemeAppLink: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

import type { Meta, StoryObj } from "@storybook/react";

import { SuspenseLoader } from "./SuspenseLoader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "widget/SuspenseLoader",
    component: SuspenseLoader,
    parameters: {
        layout: "fullsceen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof SuspenseLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightThemeSuspenseLoader: Story = {
    args: {},
};

export const DarkThemeSuspenseLoader: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

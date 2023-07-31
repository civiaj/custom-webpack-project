import type { Meta, StoryObj } from "@storybook/react";

import { PageError } from "./PageError";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "widget/PageError",
    component: PageError,
    parameters: {
        layout: "fullsceen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightThemePageError: Story = {
    args: {},
};

export const DarkThemePageError: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

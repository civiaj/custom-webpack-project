import type { Meta, StoryObj } from "@storybook/react";

import AboutPage from "./AboutPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "pages/AboutPage",
    component: AboutPage,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof AboutPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightThemeAboutPage: Story = {
    args: {},
};

export const DarkThemeAboutPage: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

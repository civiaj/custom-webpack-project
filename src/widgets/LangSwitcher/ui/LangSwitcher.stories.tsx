import type { Meta, StoryObj } from "@storybook/react";

import { LangSwitcher } from "./LangSwitcher";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "widget/LangSwitcher",
    component: LangSwitcher,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof LangSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightThemeLangSwitcher: Story = {
    args: {},
};

export const DarkThemeLangSwitcher: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

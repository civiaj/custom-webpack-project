import type { Meta, StoryObj } from "@storybook/react";
import ArticlesPage from "./ArticlesPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "pages/ArticlesPage",
    component: ArticlesPage,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ArticlesPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ArticlesPageL: Story = {
    args: {},
};

export const ArticlesPageD: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

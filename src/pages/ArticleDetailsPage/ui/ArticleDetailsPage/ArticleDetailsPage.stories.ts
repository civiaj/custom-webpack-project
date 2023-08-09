import type { Meta, StoryObj } from "@storybook/react";
import ArticleDetailsPage from "./ArticleDetailsPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "pages/ArticleDetailsPage",
    component: ArticleDetailsPage,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ArticleDetailsPageL: Story = {
    args: {
        id: "1",
    },
};

export const ArticleDetailsPageD: Story = {
    args: {
        id: "TEST",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

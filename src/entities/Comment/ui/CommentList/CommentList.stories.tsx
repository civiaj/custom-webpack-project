import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import avatar from "shared/assets/test/storybook.jpg";

const meta = {
    title: "entities/CommentList",
    component: CommentList,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof CommentList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CommentListL: Story = {
    args: {
        isLoading: false,
        comments: [
            {
                id: "1",
                text: "Comment 1",
                user: { id: "1", username: "Ivan", avatar },
            },

            {
                id: "2",
                text: "Comment 2",
                user: { id: "2", username: "Petya", avatar },
            },
        ],
    },
};

export const CommentListD: Story = {
    args: {
        isLoading: false,
        comments: [
            {
                id: "1",
                text: "Comment 1",
                user: { id: "1", username: "Ivan", avatar },
            },

            {
                id: "2",
                text: "Comment 2",
                user: { id: "2", username: "Petya", avatar },
            },
        ],
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const CommentListLoadingL: Story = {
    args: {
        isLoading: true,
        comments: [
            {
                id: "1",
                text: "Comment 1",
                user: { id: "1", username: "Ivan", avatar },
            },

            {
                id: "2",
                text: "Comment 2",
                user: { id: "2", username: "Petya", avatar },
            },
        ],
    },
};

export const CommentListEmptyL: Story = {
    args: {
        isLoading: false,
    },
};

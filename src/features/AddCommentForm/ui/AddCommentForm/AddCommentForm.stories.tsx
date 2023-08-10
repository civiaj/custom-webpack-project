import type { Meta, StoryObj } from "@storybook/react";
import AddCommentForm from "./AddCommentForm";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "feature/AddCommentForm",
    component: AddCommentForm,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof AddCommentForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AddCommentFormL: Story = {
    args: {},
};

export const AddCommentFormD: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

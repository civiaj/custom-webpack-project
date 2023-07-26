import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightThemeModal: Story = {
    args: {
        isOpen: true,
        children:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui esse, deleniti eos molestiae sit optio officia! Modi sit, sed iure, iste error, voluptate accusamus maiores aspernatur esse pariatur obcaecati? Reprehenderit.",
    },
};

export const DarkThemeModal: Story = {
    args: {
        isOpen: true,
        children:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui esse, deleniti eos molestiae sit optio officia! Modi sit, sed iure, iste error, voluptate accusamus maiores aspernatur esse pariatur obcaecati? Reprehenderit.",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

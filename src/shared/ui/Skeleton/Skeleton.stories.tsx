import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "./Skeleton";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Skeleton",
    component: Skeleton,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SkeletonL: Story = {
    args: {},
};

export const SkeletonD: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SkeletonCircleD: Story = {
    args: {
        border: "50px",
        width: 100,
        height: 100,
    },
    decorators: [],
};

import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarTheme } from "./Avatar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import avatar from "shared/assets/test/storybook.jpg";

const meta = {
    title: "shared/Avatar",
    component: Avatar,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AvatarLargeL: Story = {
    args: {
        theme: AvatarTheme.SIZE_L,
        alt: "test",
        src: avatar,
    },
};

export const AvatarMediumL: Story = {
    args: {
        alt: "test",
        src: avatar,
        theme: AvatarTheme.SIZE_M,
    },
};

export const AvatarSmallL: Story = {
    args: {
        theme: AvatarTheme.SIZE_S,
        alt: "test",
        src: avatar,
    },
};

export const AvatarD: Story = {
    args: {
        alt: "test",
        src: avatar,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

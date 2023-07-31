import type { Meta, StoryObj } from "@storybook/react";

import { AppButton, AppButtonTheme } from "./AppButton";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AboutIcon } from "shared/assets/SidebarIcons/AboutIcon";

const meta = {
    title: "shared/AppButton",
    component: AppButton,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof AppButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconButtonLight: Story = {
    args: {
        children: (
            <>
                <AboutIcon />
            </>
        ),
        theme: AppButtonTheme.ICON,
    },
};

export const IconButtonDark: Story = {
    args: {
        children: (
            <>
                <AboutIcon />
            </>
        ),
        theme: AppButtonTheme.ICON,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

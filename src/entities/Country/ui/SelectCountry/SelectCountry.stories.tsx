import type { Meta, StoryObj } from "@storybook/react";

import { SelectCountry } from "./SelectCountry";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "entities/SelectCountry",
    component: SelectCountry,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof SelectCountry>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectCountryL: Story = {
    args: {},
};

export const SelectCountryD: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

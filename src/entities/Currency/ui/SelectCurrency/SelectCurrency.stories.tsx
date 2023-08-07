import type { Meta, StoryObj } from "@storybook/react";

import { SelectCurrency } from "./SelectCurrency";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "entities/SelectCurrency",
    component: SelectCurrency,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof SelectCurrency>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectCurrencyL: Story = {
    args: {},
};

export const SelectCurrencyD: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

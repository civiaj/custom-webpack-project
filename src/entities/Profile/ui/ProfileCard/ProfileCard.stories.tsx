import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import avatar from "shared/assets/test/storybook.jpg";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

const meta = {
    title: "entities/ProfileCard",
    component: ProfileCard,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProfileCardL: Story = {
    args: {
        data: {
            username: "admin",
            age: 22,
            city: "Cheboksary",
            currency: Currency.EUR,
            country: Country.Armenia,
            firstName: "FirstName",
            secondName: "SecondName",
            avatar,
        },
    },
};

export const ProfileCardD: Story = {
    args: {
        data: {
            username: "admin",
            age: 22,
            city: "Cheboksary",
            currency: Currency.EUR,
            country: Country.Armenia,
            firstName: "FirstName",
            secondName: "SecondName",
            avatar,
        },
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ProfileCardErrorL: Story = {
    args: {
        error: "Error",
    },
    decorators: [],
};

export const ProfileCardErrorD: Story = {
    args: {
        error: "Error",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ProfileCardLoadingL: Story = {
    args: {
        isLoading: true,
    },
    decorators: [],
};

export const ProfileCardLoadingD: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

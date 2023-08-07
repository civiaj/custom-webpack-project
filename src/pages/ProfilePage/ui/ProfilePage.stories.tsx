import type { Meta, StoryObj } from "@storybook/react";
import avatar from "shared/assets/test/storybook.jpg";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

const meta = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProfilePageL: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            profile: {
                formData: {
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
        }),
    ],
};

export const DarkThemeProfilePage: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

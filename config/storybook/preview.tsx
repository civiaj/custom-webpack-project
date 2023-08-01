import type { Preview } from "@storybook/react";
import "../../src/app/styles/index.scss";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";
import { StoreDecorator } from "../../src/shared/config/storybook/StoreDecorator";
const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },

    decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator, StoreDecorator({})],
};

export default preview;

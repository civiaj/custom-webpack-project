import type { StorybookConfig } from "@storybook/react-webpack5";
import webpack from "webpack";
import path from "path";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";

const config: StorybookConfig = {
    stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    webpackFinal: (config: webpack.Configuration) => {
        const src = path.resolve(__dirname, "..", "..", "src");
        config.resolve?.modules?.push(src);
        config.resolve?.extensions?.push(".ts", ".tsx");
        // remove svg loader from storybook's webpack
        // prettier-ignore
        // eslint-disable-next-line
        // @ts-ignore
        //
        const fileLoaderRule = config?.module?.rules.find((rule) => rule?.test.test(".svg"));
        // eslint-disable-next-line
        // @ts-ignore
        fileLoaderRule.exclude = /\.svg$/;
        // add svg loader from my webpack
        config.module?.rules?.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        config.module?.rules?.push(buildCssLoaders(true));
        return config;
    },
};

export default config;

import { BuildOptions } from "./types/config";
import webpack from "webpack";

import { buildResolves } from "./buildResolves";
import { buildModules } from "./buildModules";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options;
    return {
        mode,
        entry: paths.enrty,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildModules(options),
        },
        resolve: buildResolves(),
        devtool: options.isDev ? "inline-source-map" : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined,
    };
}

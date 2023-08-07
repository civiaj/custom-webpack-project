import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import webpack from "webpack";

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        //входная точка нашего проекта
        entry: paths.entry,
        //куда будет производиться сборка
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        //плагины
        plugins: buildPlugins(options),
        //лоадеры
        module: {
            rules: buildLoaders(options),
        },
        //резолверы
        resolve: buildResolvers(options),
        mode,
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}

import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildModules({ isDev }: BuildOptions) {
    // если не исп-ем тайпскрипт, устанавливаем babel-loader
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (path: string): boolean => path.includes(".module."),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:4]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };

    return [typeScriptLoader, cssLoader];
}

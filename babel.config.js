module.exports = {
    presets: [
        "@babel/preset-typescript",
        [
            "@babel/preset-react",
            {
                runtime: "automatic",
            },
        ],
    ],
    env: {
        test: {
            plugins: ["@babel/plugin-transform-modules-commonjs"],
        },
    },
};

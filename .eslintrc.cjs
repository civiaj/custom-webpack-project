module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:i18next/recommended",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}", "**/src/**/*.test.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
            },
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react", "i18next"],
    rules: {
        indent: "off",
        "linebreak-style": ["error", "windows"],
        quotes: "off",
        semi: ["error", "always"],
        "react/react-in-jsx-scope": "off",
        "i18next/no-literal-string": ["error", { markupOnly: true }],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
    ],
    overrides: [
        {
            files: [".eslintrc.{js,cjs}", "**/src/**/*.test.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
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
        quotes: "off",
        semi: ["error", "always"],
        "react/react-in-jsx-scope": "off",
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
            },
        ],
        "react/display-name": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};

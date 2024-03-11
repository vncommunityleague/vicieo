module.exports = {
    root: true,
    extends: ["@vncommunityleague/eslint-config", "plugin:svelte/recommended"],
    overrides: [
        {
            files: ["*.svelte"],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
            },
        },
    ],
};

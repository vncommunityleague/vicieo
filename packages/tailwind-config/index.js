/** @type {import("tailwindcss").Config} */

const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./src/**/*.{ts,tsx}",
        "../../packages/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brandblue: colors.blue[500],
                brandred: colors.red[500],
            },
        },
    },
    plugins: [],
};

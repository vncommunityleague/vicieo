import colors from "tailwindcss/colors";

/** @type {import("tailwindcss").Config} */
export default {
    content: ["src/**/*.{html,js,svelte,ts}", "../../packages/**/*.{html,js,svelte,ts}}"],
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

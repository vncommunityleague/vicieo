import plugin from "tailwindcss/plugin";

/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                anicons: ["'Anicons Regular'", "sans-serif"],
            },
            transitionProperty: {
                fontvariationsettings: "font-variation-settings",
            },
            height: {
                4.5: "1.125rem",
            },
            width: {
                4.5: "1.125rem",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                ".anicons-start": {
                    fontVariationSettings: '"TIME" 1',
                },
                ".anicons-end": {
                    fontVariationSettings: '"TIME" 100',
                },
                ".horizontal-tb": {
                    writingMode: "horizontal-tb",
                },
                ".vertical-rl": {
                    writingMode: "vertical-rl",
                },
                ".vertical-lr": {
                    writingMode: "vertical-lr",
                },
            };

            addUtilities(newUtilities);
        }),
    ],
};

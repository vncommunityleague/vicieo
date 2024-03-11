import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
    theme: {
        extend: {
            borderWidth: {
                3: "3px",
                5: "5px",
                6: "6px",
                7: "7px",
                9: "9px",
                10: "10px",
                11: "11px",
                12: "12px",
            },
            height: {
                4.5: "1.125rem",
            },
            width: {
                4.5: "1.125rem",
            },
            maxWidth: {
                "8xl": "88rem",
                "9xl": "96rem",
                "10xl": "104rem",
                "11xl": "112rem",
                "12xl": "120rem",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            const utilities = {
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

            addUtilities(utilities);
        }),
    ],
};

export default config;

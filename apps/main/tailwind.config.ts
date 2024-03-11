import defaultTheme from "tailwindcss/defaultTheme";
import sharedConfig from "@vncommunityleague/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets" | "theme" | "plugins"> = {
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
};

export default config;

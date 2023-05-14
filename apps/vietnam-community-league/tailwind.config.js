/** @type {import("tailwindcss").Config} */

module.exports = {
    presets: [
        require("@vncommunityleague/tailwind-config"),
    ],
    content: [
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                anicons: ["'Anicons Regular'", "sans-serif"],
            },
            transitionProperty: {
                fontvariationsettings: "font-variation-settings"
            }
        },
    },
    plugins: [],
};

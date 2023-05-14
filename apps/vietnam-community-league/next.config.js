const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants");
const config = require("@vncommunityleague/app-config").default;

module.exports = (phase) => {
    const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;
    const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";
    const isProduction = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";

    console.log(`Development: ${isDevelopment}\tStaging: ${isStaging}\tProduction: ${isProduction}`);

    const env = {};

    return {
        images: {
            remotePatterns: [
                {
                    protocol: "https",
                    hostname: "a.ppy.sh",
                    port: "",
                    pathname: "/**",
                },
            ],
        },
        experimental: {
            appDir: true,
        },
        env,
    };
};



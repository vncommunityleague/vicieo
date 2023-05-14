import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
    splitting: true,
    entry: ["src/**/*.tsx"],
    format: ["esm"],
    dts: true,
    minify: !options.watch,
    clean: true,
    external: ["react"],
    ...options,
}));
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        port: 3001,
        strictPort: false,
    },
    preview: {
        port: 4001,
        strictPort: false,
    },
});

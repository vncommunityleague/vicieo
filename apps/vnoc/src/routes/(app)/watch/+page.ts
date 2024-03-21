import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ url }) => {
    const metadata = {
        url: url.href,
        title: "Vietnam osu! Championship 2024",
        description: "The frontier of Vietnam osu! tournament returns.",
    };

    return { metadata };
};

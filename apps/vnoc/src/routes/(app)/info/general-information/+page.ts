import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ url }) => {
    const metadata = {
        url: url.href,
        title: "Thông tin chung | Vietnam osu! Championship 2024 ・ Vietnam Community League",
        description: "The frontier of Vietnam osu! tournament returns.",
    };

    return { metadata };
};

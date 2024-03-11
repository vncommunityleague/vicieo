import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ url }) => {
    const metadata = {
        url: url.href,
        title: "Vietnam osu! Championship 2024 ・ Vietnam Community League",
        description: "A tournament organizing by Vietnam Community League.",
    };

    return { metadata };
};

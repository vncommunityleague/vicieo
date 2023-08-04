<script lang="ts">
    const tournaments: Array<{
        name: string;
        description: string;
        banner_path: string;
    }> = [
        {
            name: "DanX's Draft Cup Series",
            description:
                "A fun and gimmicky tournaments, originally hosted by SakuyaMyAngel and DanX, this is the first draft tournament of Vietnam.",
            banner_path: "/assets/images/banners/tournaments/default.png",
        },
        {
            name: "Tâm Huyết Tournament",
            description:
                'Hosted by one of the OG osu! group in Vietnam - "Tâm Huyết", THT is on its way to become the one of the premier tournament in Vietnam, with its rotating format each years.',
            banner_path: "/assets/images/banners/tournaments/default.png",
        },
        {
            name: "Vietnam Mania Championship",
            description:
                "Focus on bring new vibes to the mania scene of Vietnam, this tournament is an equivalent to VNOC but on a different game mode.",
            banner_path: "/assets/images/banners/tournaments/default.png",
        },
    ];
</script>

<svelte:head>
    <title>Affiliate Tournaments | Vietnam Community League</title>
    <meta
        name="description"
        content="These are tournaments that VCL does not organize, but provides support in administrative roles."
    />
</svelte:head>

<main>
    <div class="min-h-screen flex flex-col items-center">
        <div class="max-w-4xl px-4 py-24 flex flex-col justify-center items-center text-center">
            <h1 class="text-6xl font-medium">Affiliate Tournaments</h1>
            <hr class="w-28 mt-6 mb-8 border-b-8 border-[#e6765f]" />
            <div class="text-lg">
                These are tournaments that VCL does not organize, but provides support in administrative roles.
            </div>
        </div>
        <div class="w-full flex flex-col flex-grow justify-start items-center bg-white">
            <div class="max-w-6xl mt-4 text-black">
                <ul class="flex flex-col">
                    {#each tournaments as tournament (tournament.name)}
                        <li>
                            <div class="flex flex-col lg:flex-row items-center lg:items-start gap-y-1 lg:gap-y-10 p-8">
                                <div class="w-1/2 lg:w-1/3 flex justify-center items-center">
                                    <div class="relative w-72 sm:w-96 h-40 sm:h-56">
                                        <img
                                            src={tournament.banner_path}
                                            alt="Tournament Banner"
                                            sizes="100vw"
                                            class="object-contain"
                                        />
                                    </div>
                                </div>
                                <div class="pl-12 mt-2 lg:mt-8 text-center lg:text-left">
                                    <div class="text-4xl font-semibold">{tournament.name}</div>
                                    <div class="mt-3 text-base font-light">
                                        {tournament.description}
                                    </div>
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</main>

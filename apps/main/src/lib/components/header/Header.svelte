<script lang="ts">
    import { page } from "$app/stores";
    import { Sidebar } from "$lib/components";

    const links: Array<{ title: string; path: string }> = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Member Tournaments",
            path: "/member-tournaments",
        },
        {
            title: "Affiliate Tournaments",
            path: "/affiliate-tournaments",
        },
        {
            title: "Staff",
            path: "/staff",
        },
        {
            title: "Donate",
            path: "/donate",
        },
    ];

    let scrollPositionY = 0;
</script>

<svelte:window bind:scrollY={scrollPositionY} />

<Sidebar {links} />
<div
    class={"fixed left-0 top-0 w-full px-0 md:px-4 transition-colors duration-300 z-10" +
        (scrollPositionY > 20 ? " bg-white" : " bg-transparent")}
>
    <div class="flex justify-between items-center h-16 text-base">
        <div class="pl-12 sm:pl-14 md:pl-10 lg:pl-4 select-none">
            <div class="flex items-center justify-between gap-1.5 sm:gap-x-3">
                <a href="/" class="text-white font-bold">
                    <div class="flex justify-between items-center gap-x-2">
                        <div>
                            <div class="relative w-8 sm:w-10 h-8 sm:h-10">
                                <img
                                    src="/assets/images/logos/vietnam_community_league.png"
                                    alt="VCL Logo"
                                    sizes="100vw"
                                    class="object-contain"
                                />
                            </div>
                        </div>
                        <div
                            class={"text-lg sm:text-xl font-medium tracking-wider transition-colors duration-300" +
                                (scrollPositionY > 20 ? " text-[#e6765f]" : "")}
                        >
                            Vietnam Community League
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="hidden lg:block">
            <nav
                class={"text-lg select-none transition-colors duration-300" +
                    (scrollPositionY > 20 ? " text-black/75" : " text-white/75")}
            >
                <ul class="flex gap-3">
                    {#each links as link (link.title)}
                        <li>
                            <a
                                href={link.path}
                                class={"px-2 py-1 text-center transition-colors duration-200" +
                                    ($page.url.pathname === link.path
                                        ? " font-bold" + (scrollPositionY > 20 ? " text-black" : " text-white")
                                        : scrollPositionY > 20
                                        ? " hover:text-black"
                                        : " hover:text-white")}
                            >
                                {link.title}
                            </a>
                        </li>
                    {/each}
                </ul>
            </nav>
        </div>
    </div>
</div>

<script lang="ts">
    import { page } from "$app/stores";

    const links: Array<{ title: string; path: string }> = [
        { title: "Home", path: "/" },
        { title: "Info", path: "/info" },
        // { title: "Players", path: "/players" },
        // { title: "Schedule", path: "/schedule" },
        // { title: "Mappools", path: "/mappools" },
        // { title: "Staff", path: "/staff" },
        // { title: "Sheets", path: "/sheets" }
    ];
</script>

<div class="fixed left-0 top-0 w-full z-10 bg-[#050505]/50">
    <div class="w-full mx-auto">
        <div class="flex justify-between items-center relative h-[70px] px-4 md:px-28">
            <div class="flex items-center">
                <div>
                    <a href="/">
                        <div class="relative">
                            <div class="relative h-14 sm:h-16">
                                <img
                                    src="/assets/images/logos/vietnam_community_league.png"
                                    alt="VCL Logo"
                                    class="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </a>
                </div>
                <div class="ml-3 md:ml-12">
                    <nav>
                        <ul class="flex gap-x-4 md:gap-x-[22px]">
                            {#each links as link (link.path)}
                                <li>
                                    <a href={link.path}>
                                        <div>
                                            {link.title}
                                        </div>
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </nav>
                </div>
            </div>
            <div>
                <a href="/watch">
                    <div class="px-6 sm:px-12 py-3 bg-[#e36363] rounded-full text-sm font-bold">WATCH NOW!</div>
                </a>
            </div>
        </div>
    </div>
</div>

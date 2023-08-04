<script lang="ts">
    import { page } from "$app/stores";

    export let links;

    let scrollPositionY = 0;
    let isOpenSidebar = false;

    function handleOnClick() {
        isOpenSidebar = !isOpenSidebar;
    }

    function handleOnKeyDown(event) {
        if (event.code === "Escape") {
            isOpenSidebar = false;
        }
    }
</script>

<svelte:window bind:scrollY={scrollPositionY} on:keydown|preventDefault={handleOnKeyDown} />

<aside class="block lg:hidden fixed top-0 left-0 w-64 z-20">
    <div class="relative">
        <div class="absolute left-0 top-0 p-3 z-10">
            <button
                class="p-1.5 pt-0.5 select-none cursor-default transition-colors hover:bg-white/20 duration-300"
                on:click={handleOnClick}
            >
                <span
                    class={"p-0.5 font-anicons text-xl sm:text-2xl transition-fontvariationsettings duration-500 ease-in-out" +
                        (isOpenSidebar
                            ? " anicons-end text-black"
                            : " anicons-start " + (scrollPositionY > 20 ? " text-black" : " text-white"))}
                >
                    A
                </span>
            </button>
        </div>
        <div class="relative">
            <button
                class={"absolute left-0 top-0 w-screen h-screen cursor-default transition-all duration-300" +
                    (isOpenSidebar ? "  bg-black/60 block" : " bg-black/0 hidden")}
                on:click={handleOnClick}
            />
            <div
                class={"fixed h-screen px-8 pt-16 bg-white transition-transform z-0" +
                    (isOpenSidebar ? " translate-x-0" : " -translate-x-full")}
            >
                <nav class="text-lg text-black select-none transition-colors duration-300">
                    <ul class="flex flex-col gap-4">
                        {#each links as link}
                            <li>
                                <a
                                    href={link.path}
                                    class={"px-2 py-1 font-normal transition-colors duration-300" +
                                        ($page.url.pathname === link.path
                                            ? " text-black"
                                            : " text-zinc-400 hover:text-black/90")}
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
</aside>

<script lang="ts">
    import { Metadata } from "@vncommunityleague/ui";
    import { page } from "$app/stores";
    import Timer from "./Timer.svelte";
</script>

<Metadata
    metadata={{
        url: $page.data.metadata.url,
        title: $page.data.metadata.title,
        description: $page.data.metadata.description,
    }}
/>

<main class="flex flex-1">
    <div class="flex flex-1 flex-col justify-center max-w-7xl mx-auto px-2 py-16 md:py-24">
        <div class="relative select-none">
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div class="text-5xl/none sm:text-[76px]/none font-bold tracking-[0.01rem] text-center">
                    Vietnam osu!
                </div>
                <div class="text-5xl/none sm:text-[76px]/none font-bold tracking-[0.01rem] text-center">
                    Championship
                </div>
            </div>
            <div class="relative flex justify-center">
                <svg viewBox="0 0 612 180" width="612" height="180">
                    <text
                        x="32"
                        y="172"
                        style="fill: none; stroke: white; stroke-width: 2px; stroke-linejoin: round"
                        class="italic font-extrabold text-[230px] leading-none opacity-60"
                    >
                        2024
                    </text>
                </svg>
            </div>
        </div>
        <div class="sm:mt-3 text-center">
            <h2 class="italic text-xl tracking-[0.18rem]">Giải đấu osu! standard lớn nhất Việt Nam, nay đã trở lại!</h2>
        </div>
        <div class="mt-5">
            <div class="italic text-sm opacity-60 text-center">Thời gian tới ngày mở đăng ký giải</div>
            <Timer />
        </div>
    </div>
</main>

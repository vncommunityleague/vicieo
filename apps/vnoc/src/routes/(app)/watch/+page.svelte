<script lang="ts">
    import { onMount } from "svelte";
    import { Metadata } from "@vncommunityleague/ui";
    import { page } from "$app/stores";

    let mounted = false;

    onMount(() => {
        mounted = true;
    });

    function setupTwitchEmbed() {
        if (mounted) {
            new Twitch.Embed("twitch-embed", {
                channel: "vncommunityleague",
                width: "100%",
                height: "100%",
            });
        }
    }
</script>

<Metadata
    metadata={{
        url: $page.data.metadata.url,
        title: $page.data.metadata.title,
        description: $page.data.metadata.description,
    }}
/>

<svelte:head>
    <script src="https://embed.twitch.tv/embed/v1.js" on:load={setupTwitchEmbed}></script>
</svelte:head>

<main class="flex flex-1 h-full">
    <div class="flex flex-1 pt-[70px]">
        <div id="twitch-embed" class="w-full h-full" />
    </div>
</main>

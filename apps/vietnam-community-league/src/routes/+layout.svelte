<script>
    import { Header } from "$lib/components";
    import "../styles/app.css";
</script>

<div class="font-inter">
    <Header />
    <slot />
</div>

<style lang="postcss">
    :global(body) {
        background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
            url("/assets/images/backgrounds/vietnam_community_league_dark.png");
        background-color: black;
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
    }
</style>

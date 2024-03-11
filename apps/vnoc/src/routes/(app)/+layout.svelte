<script>
    import { Header, Footer } from "$lib/components";
</script>

<div class="app-layout">
    <Header />
    <div class="flex flex-col flex-1 min-h-screen">
        <slot />
        <Footer />
    </div>
</div>

<style lang="postcss">
    :global(body) {
        background-image: url("/assets/images/backgrounds/vnoc.png");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-color: #050505;
        color: white;
    }

    .app-layout {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>

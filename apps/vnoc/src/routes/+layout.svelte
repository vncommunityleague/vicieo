<script>
    import "../styles/app.css";
</script>

<div class="root-layout">
    <slot />
</div>

<style lang="postcss">
    .root-layout {
        min-height: 100vh;
    }
</style>

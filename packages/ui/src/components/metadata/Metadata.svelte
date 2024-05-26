<script lang="ts">
    export let metadata: {
        url: string,
        title: string,
        description: string,
    };

</script>

<svelte:head>
    <title>{metadata.title}</title>
    <meta name="title" content={metadata.title} />
    <meta name="description" content={metadata.description} />
    <meta property="og:url" content={metadata.url} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="twitter:url" content={metadata.url} />
    <meta property="twitter:title" content={metadata.title} />
    <meta property="twitter:description" content={metadata.description} />
</svelte:head>

<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
    import Nav from '$lib/components/Nav.svelte';
    import { waitLocale, locale } from 'svelte-i18n';

    export async function preload() {
        return waitLocale($locale as string);
    }

    const currentBlockTime = fetch('https://chain.api.btc.com/v3/block/latest').then(
        async (response) => {
            let json = await response.json();
            let blockTime = json.data.height;
            return blockTime;
        }
    );
</script>

<div class="header top-0 bg-no-repeat bg-cover bg-center bg-hero-bg min-h-[220px] md:min-h-[500px]">
    <div
        class="absolute w-full text-center mx-auto break-keep
        top-0 md:-top-5 left-1/2 -translate-x-1/2 font-black
		text-black/60 text-[150px] md:text-[360px]"
    >
        香港
    </div>
    <h1
        class="text-5xl md:text-8xl lg:text-9xl italic
		text-center mx-auto md:mb-20 text-purple-200
		drop-shadow-[6px_6px_0px_rgba(255,64,255,1)]
		font-black spacing-tight
        absolute top-20 md:top-48 left-1/2 -translate-x-1/2"
    >
        >NOSTR_HK
    </h1>
</div>
<Nav />
<slot />

{#await currentBlockTime}
    <div class="proseContainer">Loading...</div>
{:then blockTime}
    <Footer {blockTime} />
{:catch error}
    <div class="proseContainer">Something went wrong... 🙈</div>
{/await}

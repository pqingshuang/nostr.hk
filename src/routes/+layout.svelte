<script lang="ts">
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
    import Nav from '$lib/components/Nav.svelte';
    import { waitLocale, locale } from 'svelte-i18n';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    inject({ mode: dev ? 'development' : 'production' });

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
    import { nostrPool, relayEvents } from "$lib/store";
    // import TimeAgo from 'javascript-time-ago'
    // import en from 'javascript-time-ago/locale/en';
	import { onMount } from "svelte";
    
    // TimeAgo.addDefaultLocale(en)

    onMount(async () => {
        await $nostrPool.add('wss://relay.damus.io');
        await $nostrPool.add("wss://relay.snort.social");
        await $nostrPool.add("wss://nostr-pub.wellorder.net");

        
        

        // try {
        //     const userRelays = await window.nostr?.getRelays()
        //     console.log('userRelays', userRelays, window.nostr);
        //     if (userRelays) {
        //         Object.keys(userRelays).forEach(relay => $nostrPool.add(relay))
        //     }
        // } catch (e) {
        //     console.log('error getting relays', e)
        // }
    })
    
    import "../app.css";

    let displayRelayInfo = false;

    let relayUrls;
    $: relayUrls = Object.keys($relayEvents).filter(url => url.match(/\/\//));

    async function addNewRelay(e) {
        const formData = new FormData(e.target);
        $nostrPool.add(formData.get('newRelay'));
        e.target.reset();
    }
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

<div class="fixed bottom-0 left-0 text-4xl opacity-90 m-2 hidden md:block cursor-pointer hover:opacity-100" on:click={()=>{displayRelayInfo=!displayRelayInfo}}>⚙️</div>
{#if displayRelayInfo}
<div class="fixed bottom-12 left-0 hidden md:block  p-5 m-2 rounded-lg shadow-lg bg-purple-900 text-white">
    <div class="font-bold text-lg mb-3">Relays</div>

    <ul class="list-none">
        {#each relayUrls as relayUrl}
            <li>
                <b>{relayUrl}:</b> {$relayEvents[relayUrl]} events
            </li>
        {/each}

        <li>
<form on:submit|preventDefault={addNewRelay} class="mt-3 flex rounded-md shadow-sm">
      <div class="relative flex flex-grow items-stretch focus-within:z-10">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"stroke-width="1.5" stroke="currentColor" fill="none" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
        <input type="newRelay" name="newRelay" id="newRelay" class="block w-full rounded-none rounded-l-md border-gray-300 pl-10 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="wss://...">
      </div>
      <button type="submit" class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-purple-700 bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
        <span>Add</span>
      </button>
    </form>
    </ul>
</div>
{/if}

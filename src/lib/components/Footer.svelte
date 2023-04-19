<script lang="ts">
    import Bars from '$lib/elements/icons/Bars.svelte';
    import { now } from 'svelte/internal';

    export let blockTime: number;
</script>

<div class="proseContainer">
    <div class="border-t border-black mt-8 p-8 text-center flex flex-col items-center">
        <span>&copy; 2023 nostr.hk</span>
        <span>Current time: {blockTime}</span>
    </div>
</div>

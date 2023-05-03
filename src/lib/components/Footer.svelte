<script lang="ts">
    import { _ } from 'svelte-i18n';

    export let blockTime: number;
</script>

<div class="proseContainer">
    <div class="border-t border-black mt-8 p-8 text-center flex flex-col items-center">
        <span>&copy; 2023 nostr.hk</span>
        <span>{$_('currentTime')} {blockTime}</span>
    </div>
</div>

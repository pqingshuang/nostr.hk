<script lang="ts">
    import { _, isLoading } from 'svelte-i18n';
    import Members from '$lib/components/Members.svelte';
</script>

<div class="proseContainer">
    {#if !$isLoading}
        <h2>{$_('whatIs.title')}</h2>
        <p>{$_('whatIs.p1')}</p>
        <p>{$_('whatIs.p2')}</p>
        <p>{$_('whatIs.p3')}</p>

        <h2>{$_('nostrVsWeb3.title')}</h2>
        <p>{$_('nostrVsWeb3.p1')}</p>
        <p>{$_('nostrVsWeb3.p2')}</p>
        <p>{$_('nostrVsWeb3.p3')}</p>
        <p>{$_('nostrVsWeb3.p4')}</p>

        <h2>{$_('nostrHkMembers.title')}</h2>
    {/if}
</div>
<Members />

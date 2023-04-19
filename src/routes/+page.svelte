<script lang="ts">
    import { _, isLoading } from 'svelte-i18n';
    import Members from '$lib/components/Members.svelte';
    import ConversationThread from '$lib/components/ConversationThread.svelte';
    import { fetchEventsAndUserIds } from '$lib/utils';

    // This is G's original note
    const eventsUserIds = fetchEventsAndUserIds(
        '8d61f3346a9875bfd135a17793e13b1235843abac2ba86529b58294dadabc23a'
    );
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
    {/if}
</div>
<div class="bg-purple-900 py-8 mt-16">
    <div class="proseContainer !mt-0">
        <h2 class="!mt-0">
            {#await eventsUserIds then eventsAndIds}
                {eventsAndIds.userIds.length}
            {/await}
            {$_('nostrHkMembers.title')}
        </h2>
    </div>

    <Members eventsAndIds={eventsUserIds} />
</div>
<div class="proseContainer">
    <h2>{$_('nostrHkMembers.replyThread')}</h2>
    <p>{@html $_('join.p1')}</p>
    <p>{@html $_('join.p2')}</p>
</div>
<div class="px-2 md:mx-10 xl:mx-64 mt-16">
    <ConversationThread eventsAndIds={eventsUserIds} />
</div>

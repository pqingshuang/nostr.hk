<script lang="ts">
    import { _, isLoading } from 'svelte-i18n';
    import Members from '$lib/components/Members.svelte';
    import ConversationThread from '$lib/components/ConversationThread.svelte';
    import type { NDKFilter } from '@nostr-dev-kit/ndk';
    import ndk from '$lib/stores/ndk';

    const fetchEventsAndUserIds: Promise<App.EventsAndUserIds> = new Promise<App.EventsAndUserIds>(
        async (resolve, reject) => {
            try {
                // This is G's original note
                const rootEventId =
                    '8d61f3346a9875bfd135a17793e13b1235843abac2ba86529b58294dadabc23a';

                const rootEventFilter: NDKFilter = { ids: [rootEventId] };
                const rootEvent = await $ndk.fetchEvent(rootEventFilter);

                const threadFilter: NDKFilter = { kinds: [1], '#e': [rootEventId] };
                const threadEvents = Array.from(await $ndk.fetchEvents(threadFilter));

                const fullThread = [rootEvent, ...threadEvents];
                const userIds = fullThread.map((item) => item.pubkey);
                const uniqUserIds = [...new Set(userIds)];

                resolve({ events: fullThread, userIds: uniqUserIds });
            } catch (error) {
                reject(error);
            }
        }
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
            {#await fetchEventsAndUserIds then eventsAndIds}
                {eventsAndIds.userIds.length}
            {/await}
            {$_('nostrHkMembers.title')}
        </h2>
    </div>

    <Members eventsAndIds={fetchEventsAndUserIds} />
</div>
<div class="proseContainer">
    <h2>{$_('nostrHkMembers.replyThread')}</h2>
    <p>{@html $_('join.p1')}</p>
    <p>{@html $_('join.p2')}</p>
</div>
<div class="px-2 md:mx-10 xl:px-20 mt-16">
    <ConversationThread eventsAndIds={fetchEventsAndUserIds} />
</div>

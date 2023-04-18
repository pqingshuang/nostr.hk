<script lang="ts">
    import { _, isLoading } from 'svelte-i18n';
    import Members from '$lib/components/Members.svelte';
    import ndk from '$lib/stores/ndk';
    import type { NDKFilter } from '@nostr-dev-kit/ndk';

    // TODO: REFACTOR TO ONE PLACE
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

{#if !$isLoading}
    <div class="proseContainer">
        <h2>{$_('join.title')}</h2>
        <p>
            {@html $_('join.p1', {
                values: {
                    threadUrl:
                        'https://snort.social/e/note134slxdr2np6ml5f459me8cfmzg6cgw46c2agv55mtq55mtdtcgaqu4af4l'
                }
            })}
        </p>
        <p>
            {@html $_('join.p2', {
                values: {
                    damusUrl: 'https://apps.apple.com/us/app/damus/id1628663131',
                    amethystUrl: 'https://github.com/vitorpamplona/amethyst/releases/latest',
                    irisUrl: 'https://iris.to/'
                }
            })}
        </p>
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
{/if}

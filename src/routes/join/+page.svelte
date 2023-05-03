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
{/if}

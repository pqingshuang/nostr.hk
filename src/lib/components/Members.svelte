<script lang="ts">
    import type { NDKFilter, NDKUser, NDKUserProfile } from '@nostr-dev-kit/ndk';
    import ndk from '$lib/stores/ndk';
    import PersonCard from './PersonCard.svelte';

    const threadUsers: Promise<string[]> = new Promise<string[]>(async (resolve, reject) => {
        try {
            // This is G's original note
            const rootEventId = '8d61f3346a9875bfd135a17793e13b1235843abac2ba86529b58294dadabc23a';

            const rootEventFilter: NDKFilter = { ids: [rootEventId] };
            const rootEvent = await $ndk.fetchEvent(rootEventFilter);

            const threadFilter: NDKFilter = { '#e': [rootEventId] };
            const threadEvents = Array.from(await $ndk.fetchEvents(threadFilter));

            const fullThread = [rootEvent, ...threadEvents];
            const userIds = fullThread.map((item) => item.pubkey);
            const uniqUserIds = [...new Set(userIds)];

            resolve(uniqUserIds);
        } catch (error) {
            reject(error);
        }
    });
</script>

{#await threadUsers}
    <div class="proseContainer">
        <p class="animate-pulse">Loading...</p>
    </div>
{:then users}
    <div class="gap-6 grid grid-cols-2 px-2 md:grid-cols-4 md:mx-10 xl:grid-cols-6 xl:px-20">
        {#each users as userId}
            <PersonCard {userId} />
        {/each}
    </div>
{:catch members}
    Broken! 🙈
{/await}

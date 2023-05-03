<script lang="ts">
    import PersonCard from './PersonCard.svelte';

    export let eventsAndIds: Promise<App.EventsAndUserIds>;
</script>

{#await eventsAndIds}
    <div class="proseContainer">
        <p class="animate-pulse">Loading...</p>
    </div>
{:then eventsAndIds}
    <div class="gap-6 grid grid-cols-2 px-2 md:grid-cols-4 md:mx-10 xl:grid-cols-6 xl:px-20">
        {#each eventsAndIds.userIds as userId}
            <PersonCard {userId} />
        {/each}
    </div>
{:catch members}
    Broken! 🙈
{/await}

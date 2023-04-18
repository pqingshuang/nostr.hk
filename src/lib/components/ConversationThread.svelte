<script lang="ts">
    import EventCard from './EventCard.svelte';

    export let eventsAndIds: Promise<App.EventsAndUserIds>;

    // TODO: Sort and thread the events
</script>

{#await eventsAndIds}
    <div class="proseContainer">
        <p class="animate-pulse">Loading...</p>
    </div>
{:then eventsAndIds}
    <div class="flex flex-col gap-4">
        {#each eventsAndIds.events as event}
            <EventCard {event} />
        {/each}
    </div>
{:catch members}
    Broken! 🙈
{/await}

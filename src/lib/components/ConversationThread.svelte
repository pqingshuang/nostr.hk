<script lang="ts">
    import EventCard from './EventCard.svelte';

    export let eventsAndIds: Promise<App.EventsAndUserIds>;
</script>

{#await eventsAndIds}
    <div class="proseContainer">
        <p class="animate-pulse">Loading...</p>
    </div>
{:then eventsAndIds}
    <div class="flex flex-col gap-4">
        <EventCard threadedEvent={eventsAndIds.threadedEvent} />
    </div>
{:catch eventsAndIds}
    Broken! 🙈
{/await}

<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { locales } from '$lib/config/l10n';
    import { locale } from 'svelte-i18n';

    export let value: string | null | undefined;

    const dispatch = createEventDispatcher();

    function changeLocale(event: Event) {
        event.preventDefault();
        // @ts-ignore
        dispatch('locale-changed', event.target.value);
    }
</script>

<div class="locale-selector">
    <div class="select">
        <select
            {value}
            class="transition-all rounded-md shadow-sm p-1 text-lg
            bg-orange-400/30 hover:bg-orange-400/40
            text-orange-500 hover:text-orange-300 border-orange-500/50"
            on:change={changeLocale}
        >
            {#each locales as localeItem}
                <option value={localeItem.alpha2Code} selected={localeItem.alpha2Code === $locale}>
                    {localeItem.name}
                </option>
            {/each}
        </select>
    </div>
</div>

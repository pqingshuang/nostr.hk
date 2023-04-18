<script lang="ts">
    import type { NDKEvent, NDKUserProfile } from '@nostr-dev-kit/ndk';
    import ndk from '$lib/stores/ndk';
    import { locale } from 'svelte-i18n';
    import { timeSince } from '$lib/utils';

    export let event: NDKEvent;

    const defaultImage = `https://robohash.org/${event.pubkey}?set=set3?size=40x40`;

    const user = $ndk.getUser({ hexpubkey: event.pubkey });

    let userProfile: NDKUserProfile | undefined = undefined;
    user.fetchProfile().then(() => {
        userProfile = user.profile;
    });

    let shortNpub = `${user.npub.slice(0, 6)}...`;
    let url = `https://nostr.band/${user.npub}`;

    let millisecondCreatedAt = (event.created_at as number) * 1000;
    let profileImage: string;
    let name: string;
    $: {
        profileImage = userProfile?.image || defaultImage;
        name = userProfile?.displayName || userProfile?.name || shortNpub;
    }
</script>

<div
    class="eventCard flex flex-col gap-4 items-start
    border border-purple-800 p-4 rounded-md shadow-lg break-words overflow-hidden"
>
    <div class="flex flex-row gap-4 items-center">
        <img src={profileImage} alt="profile" class="bg-purple-600 rounded-full w-12 h-12 !m-0" />
        <div class="flex flex-col gap-1">
            <a href={url} class="w-fit m-0 text-xl font-medium">{name}</a>
            <span class="text-base font-light">{timeSince(millisecondCreatedAt)} ago</span>
        </div>
    </div>
    <span class="text-lg font-normal">{event.content}</span>
</div>

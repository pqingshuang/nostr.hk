<script lang="ts">
    import ndk from '$lib/stores/ndk';
    import type { NDKUserProfile } from '@nostr-dev-kit/ndk';

    export let userId: string;

    const defaultImage = `https://robohash.org/${userId}?set=set3?size=40x40`;

    const user = $ndk.getUser({ hexpubkey: userId });

    let userProfile: NDKUserProfile | undefined = undefined;
    user.fetchProfile().then(() => {
        userProfile = user.profile;
    });

    let shortNpub = `${user.npub.slice(0, 6)}...`;
    let url = `https://nostr.band/${user.npub}`;

    let profileImage: string;
    let name: string;
    $: {
        profileImage = userProfile?.image || defaultImage;
        name = userProfile?.displayName || userProfile?.name || shortNpub;
    }
</script>

<a
    href={url}
    target="_blank"
    class="personCard flex flex-row gap-4 items-center border border-purple-800 p-2 rounded-md overflow-hidden shadow-lg hover:shadow-xl"
>
    <img src={profileImage} alt="profile" class="bg-purple-600 rounded-full w-10 h-10 m-0" />
    <span class="m-0 border-0 font-medium">{name}</span>
</a>

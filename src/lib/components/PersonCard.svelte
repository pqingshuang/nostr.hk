<script lang="ts">
    import ndk from '$lib/stores/ndk';
    import type { NDKUserProfile } from '@nostr-dev-kit/ndk';

    export let userId: string;

    const defaultImage = `https://robohash.org/${userId}?set=set3`;

    const user = $ndk.getUser({ hexpubkey: userId });

    let userProfile: NDKUserProfile | undefined = undefined;
    user.fetchProfile().then(() => {
        userProfile = user.profile;
        console.log(user.profile);
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
    class="personCard flex flex-row gap-4 items-center border border-purple-800 p-2 rounded-md overflow-hidden shadow-lg"
>
    <img src={profileImage} alt="profile" class="rounded-full w-10 h-10 m-0" />
    <span class="m-0 border-0">{name}</span>
</a>

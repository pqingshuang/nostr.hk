// See https://kit.svelte.dev/docs/types#app

import type { NDKEvent } from '@nostr-dev-kit/ndk';

// for information about these interfaces
declare global {
    namespace App {
        interface EventsAndUserIds {
            threadedEvent: ThreadedEvent;
            userIds: string[];
        }

        interface ThreadedEvent {
            event: NDKEvent;
            replies: ThreadedEvent[];
        }
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }
}

export {};

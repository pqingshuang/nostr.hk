import type { NDKEvent, NDKFilter } from '@nostr-dev-kit/ndk';
import ndkStore from './stores/ndk';
import { get } from 'svelte/store';

export function timeSince(unixTimeStamp: number) {
    const seconds = Math.floor((new Date().getTime() - unixTimeStamp) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + ' years';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + ' months';
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + ' days';
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + ' hours';
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
}

function threadEvents(
    rootEvent: NDKEvent,
    replyEvents: NDKEvent[],
    threadedEvents?: App.ThreadedEvent | undefined,
    iteration = 0
): App.ThreadedEvent {
    // Hacky way of stopping this going on too long.
    if (iteration > 100) {
        return threadedEvents as App.ThreadedEvent;
    }

    // First create an initital ThreadedEvent object if needed
    if (!threadedEvents) {
        threadedEvents = { event: rootEvent, replies: [] } as App.ThreadedEvent;

        // Loop through all replies looking for replies to root
        replyEvents.forEach((e, idx) => {
            const eTags = e.getMatchingTags('e');
            if (eTags.length === 1) {
                const replyEvent = replyEvents.splice(idx, 1)[0];
                threadedEvents?.replies.push({
                    event: replyEvent,
                    replies: []
                } as App.ThreadedEvent);
            }
        });
    } else {
        // This means we have an initial object with root replies
        // All remaining replyEvents have more than one reply tag
        // Time to go deeper
        replyEvents.forEach((e, idx) => {
            const eTags = e.getMatchingTags('e');
            if (eTags.length === 1) {
                const replyEvent = replyEvents.splice(idx, 1)[0];
                threadedEvents?.replies.push({
                    event: replyEvent,
                    replies: []
                } as App.ThreadedEvent);
            } else {
                // Remove the tag pointing to the root
                const rootlessETags = eTags.filter((tag) => tag[1] !== rootEvent.id);

                if (rootlessETags.length === 1) {
                    // If there is only one left, it means it's a reply to a reply.
                    const replyEvent = replyEvents.splice(idx, 1)[0];
                    try {
                        const nestedReplyThread = threadedEvents?.replies.filter(
                            (reply) => reply.event.id === rootlessETags[0][1]
                        )[0] as App.ThreadedEvent;
                        const nestedIdx = threadedEvents?.replies.indexOf(
                            nestedReplyThread
                        ) as number;
                        threadedEvents?.replies[nestedIdx].replies.push({
                            event: replyEvent,
                            replies: []
                        } as App.ThreadedEvent);
                    } catch (error) {
                        // console.log("Couldn't find event for reply: ", replyEvent);
                    }
                } else {
                    // More than one "e" tag means that it's a deeper nest
                    // Try and find a match for the last reply in the list
                    const replyEvent = replyEvents.splice(idx, 1)[0];
                    try {
                        const nestedReplyThread = threadedEvents?.replies.filter(
                            (reply) => reply.event.id === rootlessETags[-1][1]
                        )[0] as App.ThreadedEvent;
                        const nestedIdx = threadedEvents?.replies.indexOf(
                            nestedReplyThread
                        ) as number;
                        threadedEvents?.replies[nestedIdx].replies.push({
                            event: replyEvent,
                            replies: []
                        } as App.ThreadedEvent);
                    } catch (error) {
                        // console.log("Couldn't find event for reply: ", replyEvent);
                    }
                }
            }
        });
    }

    // If there are still items, do it again
    if (replyEvents.length > 0) {
        return threadEvents(rootEvent, replyEvents, threadedEvents, iteration + 1);
    }
    return threadedEvents;
}

export function fetchEventsAndUserIds(rootEventId: string): Promise<App.EventsAndUserIds> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise<App.EventsAndUserIds>(async (resolve, reject) => {
        try {
            const ndk = get(ndkStore);
            const rootEventFilter: NDKFilter = { ids: [rootEventId] };
            const rootEvent = await ndk.fetchEvent(rootEventFilter);

            const threadFilter: NDKFilter = { kinds: [1], '#e': [rootEventId] };
            const threadEventsArr = Array.from(await ndk.fetchEvents(threadFilter));
            const allEvents = [rootEvent, ...threadEventsArr];
            const sortedThreadEvents = threadEventsArr.sort(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                (a, b) => a.created_at - b.created_at
            );

            const tree = threadEvents(rootEvent, sortedThreadEvents);

            const userIds = allEvents.map((item) => item.pubkey);
            const uniqUserIds = [...new Set(userIds)];

            resolve({ threadedEvent: tree, userIds: uniqUserIds });
        } catch (error) {
            reject(error);
        }
    });
}

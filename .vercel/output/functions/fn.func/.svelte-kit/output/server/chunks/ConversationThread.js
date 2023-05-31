import { c as create_ssr_component, a as subscribe, d as add_attribute, e as escape, i as is_promise, n as noop, f as each, v as validate_component, g as get_store_value } from "./index2.js";
import { n as ndkStore } from "./ndk.js";
import "@nostr-dev-kit/ndk";
import "postcss";
const PersonCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ndk, $$unsubscribe_ndk;
  $$unsubscribe_ndk = subscribe(ndkStore, (value) => $ndk = value);
  let { userId } = $$props;
  const defaultImage = `https://robohash.org/${userId}?set=set3?size=40x40`;
  const user = $ndk.getUser({ hexpubkey: userId });
  let userProfile = void 0;
  user.fetchProfile().then(() => {
    userProfile = user.profile;
  });
  let shortNpub = `${user.npub.slice(0, 6)}...`;
  let url = `https://nostr.band/${user.npub}`;
  let profileImage;
  let name;
  if ($$props.userId === void 0 && $$bindings.userId && userId !== void 0)
    $$bindings.userId(userId);
  {
    {
      profileImage = userProfile?.image || defaultImage;
      name = userProfile?.displayName || userProfile?.name || shortNpub;
    }
  }
  $$unsubscribe_ndk();
  return `<a${add_attribute("href", url, 0)} target="_blank" class="personCard flex flex-row gap-4 items-center border border-purple-800 p-2 rounded-md overflow-hidden shadow-lg hover:shadow-xl"><img${add_attribute("src", profileImage, 0)} alt="profile" class="bg-purple-600 rounded-full w-10 h-10 m-0">
    <span class="m-0 border-0 font-medium">${escape(name)}</span></a>`;
});
const Members = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { eventsAndIds } = $$props;
  if ($$props.eventsAndIds === void 0 && $$bindings.eventsAndIds && eventsAndIds !== void 0)
    $$bindings.eventsAndIds(eventsAndIds);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
    <div class="proseContainer"><p class="animate-pulse">Loading...</p></div>
`;
    }
    return function(eventsAndIds2) {
      return `
    <div class="gap-6 grid grid-cols-2 px-2 md:grid-cols-4 md:mx-10 xl:grid-cols-6 xl:px-20">${each(eventsAndIds2.userIds, (userId) => {
        return `${validate_component(PersonCard, "PersonCard").$$render($$result, { userId }, {}, {})}`;
      })}</div>
`;
    }(__value);
  }(eventsAndIds)}`;
});
function timeSince(unixTimeStamp) {
  const seconds = Math.floor(((/* @__PURE__ */ new Date()).getTime() - unixTimeStamp) / 1e3);
  let interval = seconds / 31536e3;
  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592e3;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
function findParentEvent(ev) {
  const dataWithReply = ev.tags.find(
    (tag) => tag[0] === "e" && tag[3] === "reply"
  );
  if (dataWithReply === void 0) {
    let lastE = null;
    for (let i = ev.tags.length - 1; i >= 0; i--) {
      const tag = ev.tags[i];
      if (tag.includes("e")) {
        lastE = tag;
        break;
      }
    }
    return lastE[1];
  } else {
    return dataWithReply[1];
  }
}
function findEventInThread(eventId, threadedEvents) {
  if (eventId === threadedEvents.event.id) {
    return threadedEvents;
  }
  for (const reply of threadedEvents.replies) {
    if (reply.event.id === eventId) {
      return reply;
    } else {
      if (reply.replies.length > 0) {
        const ev = findEventInThread(eventId, reply);
        return ev;
      }
    }
  }
  return void 0;
}
function addNode(e, threadedEvents) {
  const parentId = findParentEvent(e);
  const parent = findEventInThread(parentId, threadedEvents);
  if (parent !== void 0) {
    parent.replies.push({ event: e, replies: [] });
  } else {
    console.log(e, "parent not found");
    return null;
  }
  return threadedEvents;
}
function threadEvents(rootEvent, replyEvents, threadedEvents, iteration = 0) {
  if (iteration > 20) {
    return threadedEvents;
  }
  if (threadedEvents === void 0) {
    threadedEvents = { event: rootEvent, replies: [] };
    replyEvents.forEach((e, idx) => {
      const eTags = e.getMatchingTags("e");
      if (eTags.length === 1) {
        const replyEvent = replyEvents.splice(idx, 1)[0];
        threadedEvents?.replies.push({
          event: replyEvent,
          replies: []
        });
      }
    });
  } else {
    replyEvents.forEach((e, idx) => {
      const err = addNode(e, threadedEvents);
      if (err !== null) {
        replyEvents.splice(idx, 1)[0];
      }
    });
  }
  if (replyEvents.length > 0) {
    return threadEvents(rootEvent, replyEvents, threadedEvents, iteration + 1);
  }
  return threadedEvents;
}
function fetchEventsAndUserIds(rootEventId) {
  return new Promise(async (resolve, reject) => {
    try {
      const ndk = get_store_value(ndkStore);
      const rootEventFilter = { ids: [rootEventId] };
      const rootEvent = await ndk.fetchEvent(rootEventFilter);
      const threadFilter = { kinds: [1], "#e": [rootEventId] };
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
const EventCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ndk, $$unsubscribe_ndk;
  $$unsubscribe_ndk = subscribe(ndkStore, (value) => $ndk = value);
  let { threadedEvent } = $$props;
  const defaultImage = `https://robohash.org/${threadedEvent.event.pubkey}?set=set3?size=40x40`;
  const user = $ndk.getUser({ hexpubkey: threadedEvent.event.pubkey });
  let userProfile = void 0;
  user.fetchProfile().then(() => {
    userProfile = user.profile;
  });
  let shortNpub = `${user.npub.slice(0, 6)}...`;
  let url = `https://nostr.band/${user.npub}`;
  let millisecondCreatedAt = threadedEvent.event.created_at * 1e3;
  let profileImage;
  let name;
  let replies;
  if (threadedEvent.replies) {
    replies = threadedEvent.replies.sort((a, b) => a.event.created_at - b.event.created_at);
    console.log(replies);
  }
  if ($$props.threadedEvent === void 0 && $$bindings.threadedEvent && threadedEvent !== void 0)
    $$bindings.threadedEvent(threadedEvent);
  {
    {
      profileImage = userProfile?.image || defaultImage;
      name = userProfile?.displayName || userProfile?.name || shortNpub;
    }
  }
  $$unsubscribe_ndk();
  return `<div class="eventCard flex flex-col gap-6 items-start border border-purple-800 p-6 rounded-md shadow-lg break-words overflow-hidden w-full"><div class="flex flex-row gap-4 items-center"><img${add_attribute("src", profileImage, 0)} alt="profile" class="bg-purple-600 rounded-full w-12 h-12 !m-0">
        <div class="flex flex-col gap-1"><a${add_attribute("href", url, 0)} class="w-fit m-0 text-xl font-medium">${escape(name)}</a>
            <span class="text-base font-light">${escape(timeSince(millisecondCreatedAt))} ago</span></div></div>
    <span class="text-lg font-normal">${escape(threadedEvent.event.content)}</span>

    ${each(replies, (reply) => {
    return `${validate_component(EventCard, "svelte:self").$$render($$result, { threadedEvent: reply }, {}, {})}`;
  })}</div>`;
});
const ConversationThread = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { eventsAndIds } = $$props;
  if ($$props.eventsAndIds === void 0 && $$bindings.eventsAndIds && eventsAndIds !== void 0)
    $$bindings.eventsAndIds(eventsAndIds);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
    <div class="proseContainer"><p class="animate-pulse">Loading...</p></div>
`;
    }
    return function(eventsAndIds2) {
      return `
    <div class="flex flex-col gap-4">${validate_component(EventCard, "EventCard").$$render(
        $$result,
        {
          threadedEvent: eventsAndIds2.threadedEvent
        },
        {},
        {}
      )}</div>
`;
    }(__value);
  }(eventsAndIds)}`;
});
export {
  ConversationThread as C,
  Members as M,
  fetchEventsAndUserIds as f
};

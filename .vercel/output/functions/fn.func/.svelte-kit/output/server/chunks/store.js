import { w as writable } from "./index.js";
import { g as get_store_value } from "./index2.js";
import "websocket-polyfill";
import { RelayPool, Relay } from "nostr";
import { getEventHash } from "nostr-tools";
import { v4 } from "uuid";
const connectionStatus = {
  connecting: "connecting",
  connected: "connected",
  disconnected: "disconnected",
  error: "error"
};
class Nostr {
  constructor() {
    this.pool = new RelayPool([]);
    this.relays = [];
    this.relayStatus = connectionStatus.disconnected;
    this.subscriptionQueue = [];
  }
  async add(relayUrl) {
    const relay = new Relay(relayUrl);
    this.pool.add(relay);
    this.pool.on("open", (relay2) => {
      this.relays.push(relay2);
      relayEvents.update((relays) => {
        relays[relay2.url] = 0;
        return relays;
      });
      console.log(`Connected to relay ${relay2.url}, will request ${this.subscriptionQueue.length} subscriptions`);
      this.subscriptionQueue.forEach((queries) => {
        relay2.subscribe(v4(), queries);
      });
    });
    this.pool.on("event", async (relay2, subId, e) => await this.processEvent(e, relay2));
  }
  async subscribe(queries) {
    if (!this.subscriptionQueue.find((q) => JSON.stringify(q) === JSON.stringify(queries))) {
      console.log("queueing query", JSON.stringify(queries));
      this.subscriptionQueue.push(queries);
    }
    this.pool.subscribe(v4(), queries);
  }
  async processEvent(event, relay) {
    relayEvents.update((relays) => {
      relays[relay.url] = (relays[relay.url] || 0) + 1;
      return relays;
    });
    try {
      event.content = JSON.parse(event.content);
    } catch (e) {
    }
    if (event.kind === 2) {
      console.log(`got post ${event.id}`);
    } else if (event.kind === 120) {
      posts.update((posts2) => {
        if (!posts2.find((p) => p.id === event.id)) {
          posts2.unshift(event);
          this.reqProfile(event.pubkey);
        }
        return posts2;
      });
    } else if (event.kind === 0) {
      console.log(`got profile ${event.pubkey}`);
      profiles.update((profiles2) => {
        profiles2[event.pubkey] = {
          ...profiles2[event.pubkey],
          ...event.content
        };
        console.log(`there are profiles: ${Object.values(profiles2).length}`);
        return profiles2;
      });
    }
    nostrNotes.update((notes) => {
      notes[event.id] = event;
      return notes;
    });
    for (let tag of event.tags) {
      const [type, eventId] = tag;
      if (type === "e") {
        nostrNotes.update((notes) => {
          notes.responses[eventId] = notes.responses[eventId] || [];
          if (!notes.responses[eventId].includes(event.id)) {
            notes.responses[eventId].push(event.id);
          }
          notes.responses[eventId].sort((a, b) => {
            return notes[a].created_at - notes[b].created_at;
          }).reverse();
          return notes;
        });
      }
    }
    this.subscribe({ "#e": [event.id] });
  }
  reqEvent(eventId) {
    console.log(`requesting event ${eventId}`);
    if (!posts[eventId]) {
      this.subscribe({ ids: [eventId] }, { "#e": [eventId] });
    }
  }
  reqProfile(pubkey) {
    if (!profiles[pubkey]) {
      this.subscribe({ kinds: [0], authors: [pubkey] });
    }
  }
  emptyProfile(pubkey) {
    return {
      pubkey,
      display_name: pubkey,
      picture: `https://robohash.org/${pubkey}.png?set=set4`
    };
  }
  async fetchOwnProfile() {
    try {
      const pubkey = await window.nostr.getPublicKey();
      this.reqProfile(pubkey);
      this.subscribe({ kinds: [2], authors: [pubkey] });
      return pubkey;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
  async signAndPublishEvent(event) {
    console.log("signing and publishing event", event);
    event.id = getEventHash(event);
    const signedEvent = await window.nostr.signEvent(event);
    console.log(this.relays);
    await this.pool.send(["EVENT", signedEvent], this.relays);
    return { publishEvent: signedEvent };
  }
}
var stores = {};
function getStorage(type) {
  return type === "local" ? localStorage : sessionStorage;
}
function persisted(key, initialValue, options) {
  const serializer = (options == null ? void 0 : options.serializer) ?? JSON;
  const storageType = (options == null ? void 0 : options.storage) ?? "local";
  const browser = typeof window !== "undefined" && typeof document !== "undefined";
  function updateStorage(key2, value) {
    if (!browser)
      return;
    getStorage(storageType).setItem(key2, serializer.stringify(value));
  }
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
      const json = browser ? getStorage(storageType).getItem(key) : null;
      if (json) {
        set2(serializer.parse(json));
      }
      if (browser) {
        const handleStorage = (event) => {
          if (event.key === key)
            set2(event.newValue ? serializer.parse(event.newValue) : null);
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
      }
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        updateStorage(key, value);
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        updateStorage(key, value);
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}
persisted("introDismissed", false);
const nostrPool = writable(new Nostr());
const nostrNotes = writable({ responses: {} });
const posts = writable([]);
const profiles = writable({});
const relayEvents = writable({});
export {
  nostrNotes as a,
  posts as b,
  nostrPool as n,
  profiles as p,
  relayEvents as r
};

import { w as writable } from "./index.js";
import NDK from "@nostr-dev-kit/ndk";
const ndk = new NDK({
  explicitRelayUrls: [
    "wss://purplepag.es",
    "wss://relay.nostr.band",
    "wss://universe.nostrich.land/?lang=zh",
    "wss://nos.lol",
    "wss://relay.snort.social",
    "wss://relay.damus.io"
  ]
});
const ndkStore = writable(ndk);
export {
  ndkStore as n
};

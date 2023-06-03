import { c as create_ssr_component, a as subscribe, e as escape, b as createEventDispatcher, d as add_attribute, f as each, v as validate_component, i as is_promise, n as noop } from "../../chunks/index2.js";
import { X, x, $, r as re } from "../../chunks/runtime.esm.js";
import { l as locales } from "../../chunks/i18n.js";
import { inject } from "@vercel/analytics";
import { n as nostrPool, r as relayEvents } from "../../chunks/store.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe(X, (value) => $_ = value);
  let { blockTime } = $$props;
  if ($$props.blockTime === void 0 && $$bindings.blockTime && blockTime !== void 0)
    $$bindings.blockTime(blockTime);
  $$unsubscribe__();
  return `<div class="proseContainer"><div class="border-t border-black mt-8 p-8 text-center flex flex-col items-center"><span>© 2023 nostr.hk</span>
        <span>${escape($_("currentTime"))} ${escape(blockTime)}</span></div></div>`;
});
const Bars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path></svg>`;
});
const LocaleSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_locale = subscribe(x, (value2) => $locale = value2);
  let { value } = $$props;
  createEventDispatcher();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$unsubscribe_locale();
  return `<div class="locale-selector"><div class="select"><select${add_attribute("value", value, 0)} class="transition-all rounded-md shadow-sm p-1 text-lg bg-orange-400/30 hover:bg-orange-400/40 text-orange-500 hover:text-orange-300 border-orange-500/50">${each(locales, (localeItem) => {
    return `<option${add_attribute("value", localeItem.alpha2Code, 0)} ${localeItem.alpha2Code === $locale ? "selected" : ""}>${escape(localeItem.name)}
                </option>`;
  })}</select></div></div>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading, $$unsubscribe_isLoading;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_isLoading = subscribe($, (value) => $isLoading = value);
  $$unsubscribe_locale = subscribe(x, (value) => $locale = value);
  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Join", url: "/join" },
    { text: "Meet Up", url: "/meetup" },
    {
      text: "Github",
      url: "https://github.com/nostrocket/nostr.hk"
    },
    {
      text: "Nostr Thread",
      url: "https://snort.social/e/note134slxdr2np6ml5f459me8cfmzg6cgw46c2agv55mtq55mtdtcgaqu4af4l"
    },
    {
      text: "Telegram",
      url: "https://t.me/nostrhk"
    },
    {
      text: "Hackathon",
      url: "https://dorahacks.io/hackathon/hack-nostr-on"
    }
  ];
  $$unsubscribe_isLoading();
  $$unsubscribe_locale();
  return `${!$isLoading ? `
    <nav class="z-30 hidden md:flex flex-row gap-6 sticky top-0 items-center justify-center p-8 bg-black/80 text-xl">${each(navLinks, (navLink) => {
    return `<a${add_attribute("href", navLink.url, 0)} class="text-xl font-medium text-orange-500 border-orange-500">${escape(navLink.text)}
            </a>`;
  })}
        ${validate_component(LocaleSwitcher, "LocaleSwitcher").$$render($$result, { value: $locale }, {}, {})}</nav>

    
    <nav class="z-30 flex md:hidden flex-col sticky w-full top-0 items-center justify-center p-4 bg-black/90"><button class="text-orange-500">${`${validate_component(Bars, "BarsIcon").$$render($$result, {}, {}, {})}`}</button>
        ${``}</nav>` : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_nostrPool;
  let $relayEvents, $$unsubscribe_relayEvents;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_nostrPool = subscribe(nostrPool, (value) => value);
  $$unsubscribe_relayEvents = subscribe(relayEvents, (value) => $relayEvents = value);
  $$unsubscribe_locale = subscribe(x, (value) => $locale = value);
  inject({ mode: "production" });
  async function preload() {
    return re($locale);
  }
  const currentBlockTime = fetch("https://chain.api.btc.com/v3/block/latest").then(async (response) => {
    let json = await response.json();
    let blockTime = json.data.height;
    return blockTime;
  });
  if ($$props.preload === void 0 && $$bindings.preload && preload !== void 0)
    $$bindings.preload(preload);
  Object.keys($relayEvents).filter((url) => url.match(/\/\//));
  $$unsubscribe_nostrPool();
  $$unsubscribe_relayEvents();
  $$unsubscribe_locale();
  return `<div class="header top-0 bg-no-repeat bg-cover bg-center bg-hero-bg min-h-[220px] md:min-h-[500px]"><div class="absolute w-full text-center mx-auto break-keep top-0 md:-top-5 left-1/2 -translate-x-1/2 font-black text-black/60 text-[150px] md:text-[360px]">香港
    </div>
    <h1 class="text-5xl md:text-8xl lg:text-9xl italic text-center mx-auto md:mb-20 text-purple-200 drop-shadow-[6px_6px_0px_rgba(255,64,255,1)] font-black spacing-tight absolute top-20 md:top-48 left-1/2 -translate-x-1/2">&gt;NOSTR_HK
    </h1></div>
${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
    <div class="proseContainer">Loading...</div>
`;
    }
    return function(blockTime) {
      return `
    ${validate_component(Footer, "Footer").$$render($$result, { blockTime }, {}, {})}
`;
    }(__value);
  }(currentBlockTime)}

<div class="fixed bottom-0 left-0 text-4xl opacity-90 m-2 hidden md:block cursor-pointer hover:opacity-100">⚙️</div>
${``}`;
});
export {
  Layout as default
};

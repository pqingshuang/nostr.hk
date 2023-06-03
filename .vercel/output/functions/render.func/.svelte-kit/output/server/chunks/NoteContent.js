import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute } from "./index2.js";
import { p as profiles } from "./store.js";
import MarkdownIt from "markdown-it";
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $profiles, $$unsubscribe_profiles;
  $$unsubscribe_profiles = subscribe(profiles, (value) => $profiles = value);
  let { pubkey } = $$props;
  let { klass } = $$props;
  let picture;
  if ($$props.pubkey === void 0 && $$bindings.pubkey && pubkey !== void 0)
    $$bindings.pubkey(pubkey);
  if ($$props.klass === void 0 && $$bindings.klass && klass !== void 0)
    $$bindings.klass(klass);
  picture = $profiles[pubkey]?.picture || `https://robohash.org/${pubkey}.png?set=set4`;
  $$unsubscribe_profiles();
  return `<img class="${escape(klass, true) + " ring-4 ring-white rounded-full"}"${add_attribute("src", picture, 0)} alt="">`;
});
function formatSatoshis(sats, { tryThousands } = {}) {
  if (sats >= 1e6) {
    if (sats % 1e8 === 0) {
      return sats / 1e8 + " BTC";
    }
    return (sats / 1e8).toFixed(2) + " BTC";
  }
  if (tryThousands && sats >= 1e3) {
    sats = sats / 1e3;
  }
  let v = sats.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  if (v.indexOf(" ") > -1) {
    v = v.replace(" ", ",");
  }
  return `${v}${tryThousands && "k"} sats`;
}
function massageString(content) {
  const bitcoinImage = '<img src="/images/Bitcoin_evergreen.png" style="width: 1.2em; vertical-align: -20%; margin-right: 0.075em; height: 1.2em; margin-left: 2px; display: inline-block;">';
  return content.replace(/#bitcoin/, `#bitcoin${bitcoinImage}`);
}
const NoteContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let md = new MarkdownIt();
  let { content } = $$props;
  let renderContent;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  renderContent = massageString(md.render(content).toString());
  return `<div class="note-content"><!-- HTML_TAG_START -->${renderContent}<!-- HTML_TAG_END --></div>`;
});
export {
  Avatar as A,
  NoteContent as N,
  formatSatoshis as f,
  massageString as m
};

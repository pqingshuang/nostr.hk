import { c as create_ssr_component, a as subscribe, e as escape, i as is_promise, n as noop, v as validate_component } from "../../../chunks/index2.js";
import { $, X } from "../../../chunks/runtime.esm.js";
import { f as fetchEventsAndUserIds, M as Members, C as ConversationThread } from "../../../chunks/ConversationThread.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading, $$unsubscribe_isLoading;
  let $_, $$unsubscribe__;
  $$unsubscribe_isLoading = subscribe($, (value) => $isLoading = value);
  $$unsubscribe__ = subscribe(X, (value) => $_ = value);
  const eventsUserIds = fetchEventsAndUserIds("8d61f3346a9875bfd135a17793e13b1235843abac2ba86529b58294dadabc23a");
  $$unsubscribe_isLoading();
  $$unsubscribe__();
  return `${!$isLoading ? `<div class="proseContainer"><h2>${escape($_("join.title"))}</h2>
        <p><!-- HTML_TAG_START -->${$_("join.p1", {
    values: {
      threadUrl: "https://snort.social/e/note134slxdr2np6ml5f459me8cfmzg6cgw46c2agv55mtq55mtdtcgaqu4af4l"
    }
  })}<!-- HTML_TAG_END --></p>
        <p><!-- HTML_TAG_START -->${$_("join.p2", {
    values: {
      damusUrl: "https://apps.apple.com/us/app/damus/id1628663131",
      amethystUrl: "https://github.com/vitorpamplona/amethyst/releases/latest",
      irisUrl: "https://iris.to/"
    }
  })}<!-- HTML_TAG_END --></p></div>
    <div class="bg-purple-900 py-8 mt-16"><div class="proseContainer !mt-0"><h2 class="!mt-0">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(eventsAndIds) {
      return `
                    ${escape(eventsAndIds.userIds.length)}
                `;
    }(__value);
  }(eventsUserIds)}
                ${escape($_("nostrHkMembers.title"))}</h2></div>

        ${validate_component(Members, "Members").$$render($$result, { eventsAndIds: eventsUserIds }, {}, {})}</div>
    <div class="proseContainer"><h2>${escape($_("nostrHkMembers.replyThread"))}</h2>
        <p><!-- HTML_TAG_START -->${$_("join.p1")}<!-- HTML_TAG_END --></p>
        <p><!-- HTML_TAG_START -->${$_("join.p2")}<!-- HTML_TAG_END --></p></div>
    <div class="px-2 md:mx-10 xl:mx-64 mt-16">${validate_component(ConversationThread, "ConversationThread").$$render($$result, { eventsAndIds: eventsUserIds }, {}, {})}</div>` : ``}`;
});
export {
  Page as default
};

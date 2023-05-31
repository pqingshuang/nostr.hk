import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute, a as subscribe, b as createEventDispatcher, f as each } from "../../../../chunks/index2.js";
import { p as profiles, n as nostrPool, a as nostrNotes } from "../../../../chunks/store.js";
import { f as formatSatoshis, A as Avatar, N as NoteContent } from "../../../../chunks/NoteContent.js";
import MarkdownIt from "markdown-it";
import { p as page } from "../../../../chunks/stores.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title, value } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<div class="bg-white rounded-lg shadow-lg p-4 py-2"><div class="flex flex-row items-center"><div class="flex flex-col overflow-hidden"><div class="font-bold text-xl">${escape(title)}</div>
            <div class="text-gray-600 text-sm text-ellipsis truncate">${escape(value || "")}${slots.default ? slots.default({}) : ``}</div></div></div></div>`;
});
const LodgingCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { note } = $$props;
  if ($$props.note === void 0 && $$bindings.note && note !== void 0)
    $$bindings.note(note);
  return `<div class="mt-3"><div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-purple-900">${note.content.checkIn ? `${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Check-In",
      value: note.content.checkIn
    },
    {},
    {}
  )}` : ``}

        ${note.content.checkOut ? `${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Check-out",
      value: note.content.checkOut
    },
    {},
    {}
  )}` : ``}

        ${note.content.roomsAvailable ? `${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Rooms available",
      value: note.content.roomsAvailable
    },
    {},
    {}
  )}` : ``}

        ${note.content.price ? `${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Price",
      value: formatSatoshis(note.content.price)
    },
    {},
    {}
  )}` : ``}

        ${note.content.url ? `${validate_component(Card, "Card").$$render($$result, { title: "URL" }, {}, {
    default: () => {
      return `<a${add_attribute("href", note.content.url, 0)} class="text-purple-900 underline">${escape(note.content.url)}</a>`;
    }
  })}` : ``}</div>

    <div class="flex flex-col md:flex-row"></div></div>`;
});
const HeadNote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $profiles, $$unsubscribe_profiles;
  $$unsubscribe_profiles = subscribe(profiles, (value) => $profiles = value);
  new MarkdownIt();
  createEventDispatcher();
  let { note } = $$props;
  if ($$props.note === void 0 && $$bindings.note && note !== void 0)
    $$bindings.note(note);
  $$unsubscribe_profiles();
  return `<div class="bg-purple-900 text-white border md:rounded-lg p-4 w-full my-4"><div class="flex flex-row overflow-clip text-ellipsis items-center">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      klass: "m-2 h-16 ring-8 ring-purple-1000",
      pubkey: note?.pubkey
    },
    {},
    {}
  )}
        <div class="pl-4 flex flex-col text-ellipsis"><div class="font-bold text-xl text-clip">${escape($profiles[note?.pubkey]?.display_name)}</div>
            <div class="text-xs text-gray-200 mt-1"></div></div></div>

    ${note.content?.type === "lodging" ? `${validate_component(LodgingCard, "LodgingCard").$$render($$result, { note }, {}, {})}` : ``}

    <h2 class="mt-4 md:mt-6 px-4 font-bold text-2xl">${escape(note.content?.title)}</h2>

    ${note.content?.comment ? `<div class="mt-5 p-4 bg-white rounded text-gray-700 ">${validate_component(NoteContent, "NoteContent").$$render($$result, { content: note.content?.comment }, {}, {})}</div>` : `<div class="mt-2 p-2 rounded text-purple-200 text-sm">oh brother,
            <em>${escape($profiles[note.pubkey]?.display_name)}</em>
            didn&#39;t write anything 🤷‍♂️
        </div>`}
    <div class="flex flex-col md:flex-row items-end mt-3 justify-end"><button class="bg-purple-600 text-white px-8 py-2 font-semibold flex-1 md:flex-0">INTERESTED?
        </button></div></div>`;
});
const Note = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $profiles, $$unsubscribe_profiles;
  $$unsubscribe_profiles = subscribe(profiles, (value) => $profiles = value);
  let { note } = $$props;
  if ($$props.note === void 0 && $$bindings.note && note !== void 0)
    $$bindings.note(note);
  $$unsubscribe_profiles();
  return `<div class="bg-white border border-l-purple-900 border-l-8 rounded-l-none rounded-lg p-4 w-full text-gray-700 my-4"><div class="flex flex-row overflow-clip text-ellipsis">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      klass: "ring-purple-900 m-2 h-16",
      pubkey: note.pubkey
    },
    {},
    {}
  )}

        <div class="pl-6 flex flex-col text-ellipsis"><div class="font-bold text-xl text-clip">${escape($profiles[note.pubkey]?.display_name)}</div>
            <div class="text-xs text-gray-500 mt-1"></div>

            <div class="mt-5">${validate_component(NoteContent, "NoteContent").$$render($$result, { content: note.content }, {}, {})}</div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_nostrPool;
  let $page, $$unsubscribe_page;
  let $nostrNotes, $$unsubscribe_nostrNotes;
  $$unsubscribe_nostrPool = subscribe(nostrPool, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_nostrNotes = subscribe(nostrNotes, (value) => $nostrNotes = value);
  let noteId = $page.params.id;
  $$unsubscribe_nostrPool();
  $$unsubscribe_page();
  $$unsubscribe_nostrNotes();
  return `
<div class="proseContainer">${$nostrNotes[noteId] ? `<main class="w-full"><div class="w-full">${$nostrNotes[noteId] ? `<div>${validate_component(HeadNote, "HeadNote").$$render($$result, { note: $nostrNotes[noteId] }, {}, {})}</div>` : ``}</div>

    ${``}

    <h1 class="text-purple-700">Comments
        <span>${$nostrNotes.responses[noteId] ? `(${escape($nostrNotes.responses[noteId].length)})` : ``}</span></h1>

    ${$nostrNotes.responses[noteId] ? `${each($nostrNotes.responses[noteId], (responseId) => {
    return `${validate_component(Note, "Note").$$render($$result, { note: $nostrNotes[responseId] }, {}, {})}`;
  })}` : ``}</main>` : `Loading ${escape(noteId)}`}</div>

`;
});
export {
  Page as default
};

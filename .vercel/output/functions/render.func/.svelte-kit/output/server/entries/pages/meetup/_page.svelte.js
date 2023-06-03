import { c as create_ssr_component, e as escape, a as subscribe, f as each, v as validate_component } from "../../../chunks/index2.js";
import { n as nostrPool, b as posts, a as nostrNotes } from "../../../chunks/store.js";
import { m as massageString, N as NoteContent, f as formatSatoshis, A as Avatar } from "../../../chunks/NoteContent.js";
import parse from "date-fns/parse/index.js";
import { intlFormat } from "date-fns";
const CalendarIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date, endDate } = $$props;
  let day, month;
  let endDay, endMonth;
  let parsedDate = parse(date, "yyyy-MM-dd", /* @__PURE__ */ new Date());
  let parsedEndDate = parse(endDate, "yyyy-MM-dd", /* @__PURE__ */ new Date());
  day = intlFormat(parsedDate, { day: "numeric" });
  month = intlFormat(parsedDate, { month: "short" });
  intlFormat(parsedDate, { weekday: "long" });
  if (endDate) {
    endDay = intlFormat(parsedEndDate, { day: "numeric" });
    endMonth = intlFormat(parsedEndDate, { month: "short" });
    intlFormat(parsedEndDate, { weekday: "long" });
  }
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.endDate === void 0 && $$bindings.endDate && endDate !== void 0)
    $$bindings.endDate(endDate);
  return `<div class="bg-white font-medium border-1"><div class="flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-md"><div class="block rounded-t overflow-hidden text-center"><div class="bg-purple-900 text-xs font-semibold uppercase text-white py-1 whitespace-nowrap px-2">${month && endMonth && month !== endMonth ? `${escape(month)} - ${escape(endMonth)}` : `${escape(month)}`}</div>
            <div class="py-1 border-l border-r border-white bg-white"><span class="text-xl font-bold leading-tight px-2 whitespace-nowrap">${day && endDay && day !== endDay ? `${escape(day)} - ${escape(endDay)}` : `${escape(day)}`}</span></div>
            </div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_nostrPool;
  let $posts, $$unsubscribe_posts;
  let $nostrNotes, $$unsubscribe_nostrNotes;
  $$unsubscribe_nostrPool = subscribe(nostrPool, (value) => value);
  $$unsubscribe_posts = subscribe(posts, (value) => $posts = value);
  $$unsubscribe_nostrNotes = subscribe(nostrNotes, (value) => $nostrNotes = value);
  $$unsubscribe_nostrPool();
  $$unsubscribe_posts();
  $$unsubscribe_nostrNotes();
  return `
    <div class="my-4 rounded"><div class="d-flex justify-content-center" style="display: grid;justify-content: center;align-items: center;">${each($posts, (post) => {
    return `<div class="flex flex-row py-5 bg-white w-full hover:bg-purple-50 cursor-pointer md:mb-4 md:rounded md:shadow border-b-gray-300 border-b max-h-24"><div class="flex-shrink px-4"><div class="text-gray-900">${post.content.type == "airport" ? `<span class="text-5xl">🚗</span>` : `${post.content.type === "lodging" ? `<span class="text-5xl">🏡</span>` : `${post.content.type === "surfing" ? `<span class="text-5xl">🏄‍♂️</span>` : `${post.content.type === "climbing" ? `<span class="text-5xl">🧗‍♂️</span>` : `${post.content.type === "coffee" ? `<span class="text-5xl">☕️</span>` : `${post.content.type === "psa" ? `<span class="text-5xl">📢</span>` : `${escape(post.content.type)}`}`}`}`}`}`}
      </div></div>

    <div class="flex-grow px-4 overflow-hidden"><div class="flex flex-col"><div class="flex-1 overflow-hidden"><div class="truncate">${post.content.title ? `<h2 class="font-semibold text-lg text-purple-900"><!-- HTML_TAG_START -->${massageString(post.content.title)}<!-- HTML_TAG_END -->
              </h2>` : ``}
            <div class="text-gray-500 text-sm mt-1">${validate_component(NoteContent, "NoteContent").$$render($$result, { content: post.content.comment }, {}, {})}</div>
          </div></div>
        ${post.content.price ? `<div class="flex flex-1 items-end"><div class="bg-slate-100 shadow border px-3 py-1 flex-shrink rounded-xl"><img src="https://abs.twimg.com/hashflags/Bitcoin_evergreen/Bitcoin_evergreen.png" style="width: 1.2em; vertical-align: -20%; margin-right: 0.075em; height: 1.2em; margin-left: 2px; display: inline-block;">
              <span class="text-gray-900 font-normal text-xs">${escape(formatSatoshis(parseInt(post.content.price), { tryThousands: true }))}
              </span></div>
          </div>` : ``}
      </div></div>

    <div class="flex-shrink px-4 flex flex-row items-center gap-1"><div class="flex-shrink flex flex-row items-center">${post.content.type == "airport" ? `${post.content.date ? `${validate_component(CalendarIcon, "CalendarIcon").$$render($$result, { date: post.content.date }, {}, {})}` : ``}` : `${post.content.checkIn ? `<div class="mr-2">${validate_component(CalendarIcon, "CalendarIcon").$$render(
      $$result,
      {
        date: post.content.checkIn,
        endDate: post.content.checkOut
      },
      {},
      {}
    )}
            </div>` : ``}`}</div>

      <div class="flex flex-col md:flex-row-reverse justify-center md:justify-start items-center"><div class="h-10 w-10 flex-shrink-0">${validate_component(Avatar, "Avatar").$$render(
      $$result,
      {
        klass: "sm:ring-purple-900 sm:ring-2",
        pubkey: post.pubkey
      },
      {},
      {}
    )}</div>

        ${$nostrNotes.responses[post.id] ? `<div class="whitespace-nowrap py-2 px-3 text-sm bg-purple-100 text-gray-800 rounded-lg mt-1 md:mr-2 flex flex-row md:flex-col items-center gap-1"><span class="font-bold text-md">${escape($nostrNotes.responses[post.id].length)}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path></svg></span>
        </div>` : ``}
      </div></div>
    
  </div>`;
  })}</div></div>`;
});
export {
  Page as default
};

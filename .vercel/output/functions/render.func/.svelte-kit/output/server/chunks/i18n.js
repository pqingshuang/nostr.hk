import { y, z, O, x } from "./runtime.esm.js";
const locales = [
  { alpha2Code: "en", name: "English" },
  { alpha2Code: "zh", name: "中文" }
];
const supportedLocales = locales.map((item) => item.alpha2Code);
const fallbackLocale = "en";
y("en", () => import("./en.js"));
y("zh", () => import("./zh.js"));
function setupI18n(opts) {
  const parsedLocale = supported(language(opts?.locale || z()));
  O({
    fallbackLocale,
    initialLocale: parsedLocale
  });
  if (opts && opts.locale) {
    x.set(supported(opts.locale));
  }
}
function language(locale2) {
  return locale2?.replace("_", "-").split("-")[0];
}
function supported(locale2) {
  if (locale2 && supportedLocales.includes(locale2)) {
    return locale2;
  } else {
    return fallbackLocale;
  }
}
export {
  locales as l,
  setupI18n as s
};

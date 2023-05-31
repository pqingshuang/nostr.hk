import { s as setupI18n } from "../../chunks/i18n.js";
import { n as ndkStore } from "../../chunks/ndk.js";
import { g as get_store_value } from "../../chunks/index2.js";
async function load() {
  setupI18n();
  const ndk = get_store_value(ndkStore);
  await ndk.connect();
  return {};
}
export {
  load
};

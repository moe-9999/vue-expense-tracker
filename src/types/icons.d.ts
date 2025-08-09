/// <reference types="unplugin-icons/types/vue" />

declare module "~icons/*" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent<Record<string, unknown>>;
  export default component;
}

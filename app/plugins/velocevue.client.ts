import { Accordion, Button, Input, Select, Popover } from "veloce-vue/ui";
import { Icon } from "veloce-vue/icons";
import { ToastContainer, useToast } from "veloce-vue/toast";

export default defineNuxtPlugin((nuxtApp) => {
  // Register VeloceVue components globally with V prefix
  nuxtApp.vueApp.component("VAccordion", Accordion);
  nuxtApp.vueApp.component("VButton", Button);
  nuxtApp.vueApp.component("VInput", Input);
  nuxtApp.vueApp.component("VSelect", Select);
  nuxtApp.vueApp.component("Icon", Icon);
  nuxtApp.vueApp.component("VPopover", Popover);
  nuxtApp.vueApp.component("VToastContainer", ToastContainer);

  // Make useToast available globally
  return {
    provide: {
      toast: useToast,
    },
  };
});

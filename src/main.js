import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import BootstrapVue from "bootstrap-vue";
import VueStickyKit from "vue-stickykit";

import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

Vue.use(BootstrapVue);
Vue.use(VueStickyKit);
Vue.use(VueSidebarMenu);

Vue.config.productionTip = false;

import Default from "./Layout/Wrappers/baseLayout.vue";
import "../node_modules/nprogress/nprogress.css";

Vue.component("default-layout", Default);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

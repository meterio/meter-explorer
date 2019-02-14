import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "./filters";
import Icon from "vue-awesome/components/Icon";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component("v-icon", Icon);

new App({
  router
}).$mount("#app");

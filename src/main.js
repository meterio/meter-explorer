import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "./filters";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new App({
  router
}).$mount("#app");

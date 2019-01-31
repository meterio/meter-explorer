import Vue from "vue";
import VueRouter from "vue-router";

import ItWorks from "./views/ItWorks.vue";
import HelloWorld from "./views/HelloWorld.vue";
import Blocks from "./views/Blocks.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/blocks", name: "blocks", component: Blocks },
  { path: "/hello", name: "hello", component: HelloWorld },
  { path: "/*", name: "default", component: ItWorks }
];

export default new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});

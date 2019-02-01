import Vue from "vue";
import VueRouter from "vue-router";

import ItWorks from "./views/ItWorks.vue";
import HelloWorld from "./views/HelloWorld.vue";
import Blocks from "./views/Blocks.vue";
import BlockDetail from "./views/BlockDetail.vue";
import TxDetail from "./views/TxDetail.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Blocks },
  { path: "/blocks", name: "blocks", component: Blocks },
  { path: "/block/:id", name: "block-detail", component: BlockDetail },
  { path: "/tx/:id", name: "transaction", component: TxDetail },
  { path: "/hello", name: "hello", component: HelloWorld },
  { path: "/*", name: "default", component: ItWorks }
];

export default new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});

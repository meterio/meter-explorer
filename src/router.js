import Vue from "vue";
import VueRouter from "vue-router";

import ItWorks from "./views/ItWorks.vue";
import HelloWorld from "./views/HelloWorld.vue";
import RecentBlocks from "./views/RecentBlocks.vue";
import Block from "./views/Block.vue";
import Tx from "./views/Tx.vue";
import Account from "./views/Account.vue";
import Search from "./views/Search.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: RecentBlocks },
  { path: "/recent", name: "recent-blocks", component: RecentBlocks },
  { path: "/block/:id", name: "block", component: Block },
  { path: "/tx/:id", name: "tx", component: Tx },
  { path: "/account/:addr", name: "account", component: Account },
  { path: "/search", name: "search", component: Search },
  { path: "/hello", name: "hello", component: HelloWorld },
  { path: "/*", name: "default", component: ItWorks }
];

export default new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});

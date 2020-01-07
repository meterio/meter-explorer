import Vue from 'vue';
import VueRouter from 'vue-router';

import RecentBlocks from './views/RecentBlocks.vue';
import Block from './views/Block.vue';
import Tx from './views/Tx.vue';
import Account from './views/Account.vue';
import Search from './views/Search.vue';
import CandidateList from './views/CandidateList.vue';
import BucketList from './views/BucketList.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: RecentBlocks },
  { path: '/recent', name: 'recent-blocks', component: RecentBlocks },
  { path: '/block/:id', name: 'block', component: Block },
  { path: '/tx/:id', name: 'tx', component: Tx },
  { path: '/account/:addr', name: 'account', component: Account },
  { path: '/search', name: 'search', component: Search },
  { path: '/candidates', name: 'candidates', component: CandidateList },
  { path: '/buckets', name: 'buckets', component: BucketList }
];

export default new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});

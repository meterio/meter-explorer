import Vue from 'vue';
import VueRouter from 'vue-router';

import RecentBlocks from './views/RecentBlocks.vue';
import Block from './views/Block.vue';
import Tx from './views/Tx.vue';
import Account from './views/Account.vue';
import Search from './views/Search.vue';
import CandidateList from './views/CandidateList.vue';
import BucketList from './views/BucketList.vue';
import Buckets from './views/Buckets.vue';
import Bucket from './views/Bucket.vue';
import Metrics from './views/Metrics.vue';
import TotalSupply from './views/TotalSupply.vue';
import Circulating from './views/Circulating.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: RecentBlocks },
  { path: '/recent', name: 'recent-blocks', component: RecentBlocks },
  { path: '/block/:id', name: 'block', component: Block },
  { path: '/tx/:id', name: 'tx', component: Tx },
  { path: '/account/:addr', name: 'account', component: Account },
  { path: '/search', name: 'search', component: Search },
  { path: '/candidates', name: 'candidates', component: CandidateList },
  { path: '/buckets', name: 'buckets', component: BucketList },
  { path: '/bucket/:id', name: 'bucket', component: Bucket },
  { path: '/metrics', name: 'metrics', component: Metrics },
  {
    path: '/buckets/:owner/:candidate',
    name: 'targetted-buckets',
    component: Buckets
  },
  {
    path: '/mtrg/totalSupply',
    name: 'total-supply',
    component: TotalSupply,
    meta: { layout: 'no-layout' }
  },
  {
    path: '/mtrg/circulating',
    name: 'circulating',
    component: Circulating,
    meta: { layout: 'no-layout' }
  }
];

export default new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});

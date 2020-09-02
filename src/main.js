import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import './filters';
import DefaultLayout from './layouts/DefaultLayout.vue';
import NoLayout from './layouts/NoLayout.vue';

Vue.component('default-layout', DefaultLayout);
Vue.component('no-layout', NoLayout);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new App({
  router
}).$mount('#app');

<template>
  <component :is="layout">
    <router-view :key="$route.fullPath"></router-view>
  </component>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import "vue-awesome/icons";

import './style.scss';
const default_layout = 'default-layout';

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  get layout() {
    return this.$route.meta.layout || default_layout;
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

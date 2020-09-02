<template>
  <div style="min-height:100%;background:#f5f5f5;">
    <div>
      <Navbar />
      <div class="container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import "vue-awesome/icons";

import '../style.scss';

@Component({
  components: {
    Navbar
  }
})
export default class DefaultLayout extends Vue {}
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

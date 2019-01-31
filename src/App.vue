<template>
  <div>
    <img alt="Vue logo" src="/assets/logo.png">
    <router-link to="/hello">Hello</router-link>
    <router-link to="/blocks">Blocks</router-link>
    <div>
      View: {{$route.fullPath}}
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="sub-panel">
    <b-card>
      <div slot="header">
        {{index}}. Emitter
        <router-link :to="{name:'account', params:{addr:item.address}}">{{item.address}}</router-link>
      </div>
      <b-row>
        <b-col cols="2">Topics</b-col>
        <b-col cols="10">
          <pre>{{item.topics.join('\n')}}</pre>
        </b-col>

        <b-col cols="2">Data</b-col>
        <b-col cols="10">
          <pre>{{item.data}}</pre>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["index", "item"]
};
</script>

<style lang="scss" scoped>
.card-header {
  padding: 0.5rem 1.25rem;
}
.card-body {
  padding: 0.8rem 1.25rem 0.2rem 1.25rem;
}
</style>

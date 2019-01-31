<template>
  <div class="block">
    <h1>Block</h1>
    <BlockCard v-bind:block="block"/>
  </div>
</template>

<script>
import { getBlockLatest } from "../thor";
import BlockCard from "../components/BlockCard.vue";

export default {
  name: "Blocks",
  props: {
    block: String
  },
  components: {
    BlockCard
  },
  mounted: function() {
    // console.log(this);
    getBlockLatest().then(
      function(data) {
        // console.log(this);
        this.block = data;
        // console.log("mounted ->");
      }.bind(this)
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

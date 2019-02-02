<template>
  <div>
    <h2>Recent Blocks</h2>

    <div v-for="block in blocks" :key="block.number">
      <BlockCard v-bind:block="block"></BlockCard>
    </div>
  </div>
</template>

<script>
import { getBlockLatest, web3 } from "../client";
import BlockCard from "../components/BlockCard.vue";

export default {
  name: "RecentBlocks",
  components: {
    BlockCard
  },
  data: function() {
    return {
      height: 0,
      block: {},
      blocks: []
    };
  },
  mounted: function() {
    // console.log(this);
    this.blocks = [];

    getBlockLatest().then(
      function(data) {
        // console.log(this);
        this.block = data;
        // console.log("mounted ->");
      }.bind(this)
    );

    web3.eth.getBlockNumber().then(
      async function(data) {
        let blocks = [];
        this.height = data;

        for (let i = 0; i < 6; i++) {
          let h = this.height - i;
          let block = await web3.eth.getBlock(h);
          blocks.push(block);
        }

        this.blocks = blocks;
      }.bind(this)
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

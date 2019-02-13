<template>
  <div>
    <h2>Recent Blocks</h2>

    <transition-group tag="div" name="block-list">
      <div v-for="block in blocks" :key="block.number">
        <BlockCard v-bind:block="block"></BlockCard>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { web3 } from "../client";
import BlockCard from "../components/BlockCard.vue";

export default {
  name: "RecentBlocks",
  components: {
    BlockCard
  },
  data: function() {
    return {
      blocks: [],
      topHeight: 0,
      bottomHeight: 0,
      bottom: false
    };
  },
  methods: {
    loadBlock: async function(height) {
      if (height <= this.bottomHeight) {
        let blk = await web3.eth.getBlock(height);
        this.blocks.push(blk);
        this.bottomHeight = height - 1;
      }
      if (height >= this.topHeight) {
        let blk = await web3.eth.getBlock(height);
        this.blocks.unshift(blk);
        this.topHeight = height;
      }
    },
    bottomVisible: function() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    loadMoreBlocks: async function() {
      for (let i = 0; i < 6; i++) {
        await this.loadBlock(this.bottomHeight);
      }
    }
  },
  watch: {
    bottom: function(bottom) {
      if (bottom) {
        this.loadMoreBlocks();
      }
    }
  },
  created: function() {
    // console.log(this);
    this.blocks = [];

    // scroll event listener
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });

    // timer
    window.setInterval(
      function() {
        web3.eth.getBlockNumber().then(
          async function(height) {
            for (let h = this.topHeight + 1; h < height; h++) {
              await this.loadBlock(h);
            }
          }.bind(this)
        );
      }.bind(this),
      2000
    );

    // initialize load
    web3.eth.getBlockNumber().then(
      async function(height) {
        this.topHeight = height;
        this.bottomHeight = height - 1;
        for (let i = 0; i < 6; i++) {
          await this.loadBlock(this.topHeight - i);
        }
      }.bind(this)
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.block-list-enter-active {
  transition: all 0.4s;
  transition-timing-function: ease;
}
.block-list-enter {
  transform: translateY(-30%);
  opacity: 0;
}
.block-list-leave-to {
  opacity: 0;
}

.block-list-move {
  transition: all 0.3s;
  transition-timing-function: ease;
}
</style>
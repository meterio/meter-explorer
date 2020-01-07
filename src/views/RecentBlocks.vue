<template>
  <div>
    <h2>Recent Blocks</h2>

    <div v-if="blocks">
      <transition-group tag="div" name="block-list">
        <div v-for="block in blocks" :key="block.number">
          <BlockCard v-bind:block="block" v-bind:now="now"></BlockCard>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { getBlockNumber, getBlock } from '../client';
import BlockCard from '../components/BlockCard.vue';

const REFRESH_INTERVAL = 1000; // milliseconds (interval to update block timestamp)
const FETCH_INTERVAL = 4000; // milliseconds (interval to fetch blocks)
const BATCH_SIZE = 10;
export default {
  name: 'RecentBlocks',
  components: {
    BlockCard
  },
  data() {
    return {
      blocks: [],
      blockCache: {},

      topHeight: 0,
      bottomHeight: 0,
      bottom: false,
      now: Date.now()
    };
  },
  methods: {
    updateView() {
      // extend the bottom
      let cur = this.bottomHeight - 1;
      while (cur in this.blockCache) {
        this.bottomHeight = cur;
        this.blocks.push(this.blockCache[cur]);
        cur -= 1;
      }
      // extend the top
      cur = this.topHeight + 1;
      while (cur in this.blockCache) {
        this.topHeight = cur;
        this.blocks.unshift(this.blockCache[cur]);
        cur += 1;
      }
    },
    async loadBlock(height) {
      if (height in this.blockCache) {
        return;
      }
      const blk = await getBlock(height);
      this.blockCache[height] = blk;

      this.updateView();
      // console.log("loaded block at height, ", height);
      return blk;
    },
    bottomVisible() {
      const { scrollY } = window;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY + 200 >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    async loadMoreBlocks() {
      const promises = [];
      for (
        let cur = this.bottomHeight - 1;
        cur > this.bottomHeight - BATCH_SIZE - 1;
        cur -= 1
      ) {
        promises.push(this.loadBlock(cur));
      }
      await Promise.all(promises);
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.loadMoreBlocks();
      }
    }
  },
  created() {
    // console.log(this);
    this.blocks = [];
    this.blockCache = {};

    // scroll event listener
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible();
    });

    // timer
    window.setInterval(() => {
      this.now = Date.now();
    }, REFRESH_INTERVAL);

    window.setInterval(() => {
      getBlockNumber().then(async height => {
        const promises = [];
        for (let h = this.topHeight + 1; h < height; h += 1) {
          promises.push(this.loadBlock(h));
        }
        await Promise.all(promises);
      });
    }, FETCH_INTERVAL);

    // initialize load
    getBlockNumber().then(async height => {
      const blk = await this.loadBlock(height);
      this.blocks.push(blk);
      this.topHeight = height;
      this.bottomHeight = height;
      await this.loadMoreBlocks();
    });
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

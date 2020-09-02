<template>
  <div>{{totalSupply }}</div>
</template>

<script>
import { getMTRGStat } from '../client';

export default {
  data() {
    return { totalSupply: '' };
  },
  created() {
    getMTRGStat().then(stat => {
      this.totalSupply = stat.totalSupply;
    });
  }
};
</script>

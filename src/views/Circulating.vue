<template>
  <div>{{circulating }}</div>
</template>

<script>
import { getMTRGStat } from '../client';

export default {
  data() {
    return { circulating: '' };
  },
  created() {
    getMTRGStat().then(stat => {
      this.circulating = stat.circulatingMTRG;
    });
  }
};
</script>

<template>
  <div>
    <h3>Staking Buckets</h3>
    <p>Owner: {{ owner }}</p>
    <p>Candidate: {{ candidate }}</p>
    <table class="table" v-if="buckets.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Votes</th>
          <th>Bonus Votes</th>
          <th>Total Votes</th>
          <th>Nonce</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(b, index) in buckets" :key="index">
          <td>
            {{ b.id }}
            <br />
            Created at: {{ b.CreateTime }}, Mature at {{ b.maturetime }}
          </td>
          <td>{{ b.value }}</td>
          <td>{{ b.bonusvotes }}</td>
          <td>{{ b.totalvotes }}</td>
          <td>{{ b.nonce }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getStakingBuckets } from '../client';

export default {
  name: 'Buckets',
  components: {},
  data: () => {
    return { owner: '', candidate: '', buckets: [] };
  },
  methods: {},
  created() {
    console.log('Hello');
    const { owner, candidate } = this.$route.params;
    this.owner = owner;
    this.candidate = candidate;

    getStakingBuckets().then(buckets => {
      let values;
      values = [];
      buckets.forEach(bucket => {
        if (bucket.owner === owner && bucket.candidate === candidate) {
          values.push(bucket);
        }
      });

      this.buckets = values;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>

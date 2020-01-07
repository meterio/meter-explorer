<template>
  <div>
    <table class="table" v-if="buckets.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Owner</th>
          <th>Candidate Address</th>
          <th>Total Votes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in buckets" :key="c.id">
          <td>{{ c.id | abbr }}</td>
          <td>
            <router-link :to="{ name: 'account', params: { addr: c.owner } }">
              {{
              c.owner
              }}
            </router-link>
          </td>
          <td>
            <router-link :to="{ name: 'account', params: { addr: c.candidate } }">{{ c.candidate }}</router-link>
          </td>
          <td>{{ c.totalvotes }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getStakingBuckets } from '../client';

export default {
  name: 'BucketList',
  components: {},
  data: () => {
    return { buckets: [] };
  },
  methods: {},
  created() {
    console.log('Hello');
    getStakingBuckets().then(data => {
      console.log(data);
      this.buckets = data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>

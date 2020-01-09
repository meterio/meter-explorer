<template>
  <div>
    <h2>Staking Buckets</h2>
    <b-card>
      <table class="table" v-if="buckets.length > 0">
        <thead>
          <tr>
            <th>Owner</th>
            <th>Candidate Address</th>
            <th>Total Votes</th>
            <th>Buckets</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in summary" :key="index">
            <td>
              <router-link
                :to="{ name: 'account', params: { addr: row.owner } }"
              >{{ row.owner | abbr }}</router-link>
            </td>
            <td>
              <router-link
                :to="{ name: 'account', params: { addr: row.candidate } }"
              >{{ row.candidate | abbr }}</router-link>
            </td>
            <td>{{ row.totalvotes }}</td>
            <td>
              <div v-for="id in row.ids" :key="id">
                <router-link :to="{ name: 'bucket', params: { id: id } }">
                  {{
                  id | abbr
                  }}
                </router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </b-card>
  </div>
</template>

<script>
import { getStakingBuckets } from '../client';

export default {
  name: 'BucketList',
  components: {},
  data: () => {
    return { buckets: [], summary: [] };
  },
  methods: {},
  created() {
    console.log('Hello');
    getStakingBuckets().then(data => {
      let summary;
      summary = {};
      console.log(data);
      data.forEach(bucket => {
        const key = [bucket.owner, bucket.candidate];
        if (key in summary) {
          summary[key].totalvotes += parseInt(bucket.totalvotes, 10);
          summary[key].buckets += 1;
          summary[key].ids.push(bucket.id);
        } else {
          summary[key] = {
            ids: [bucket.id],
            owner: bucket.owner,
            candidate: bucket.candidate,
            totalvotes: parseInt(bucket.totalvotes, 10),
            buckets: 1
          };
        }
      });

      let values;
      this.buckets = data;
      this.summary = Object.values(summary);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>

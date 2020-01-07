<template>
  <div>
    <table class="table" v-if="candidates">
      <thead>
        <tr>
          <th>Name</th>
          <th>Wallet Address</th>
          <th>IP</th>
          <th>Total Votes</th>
          <th>Buckets</th>
          <th>Committee</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in candidates" :key="c.id">
          <td>{{ c.name }}</td>
          <td>
            <router-link :to="{ name: 'account', params: { addr: c.addr } }">
              {{
              c.addr
              }}
            </router-link>
          </td>
          <td>{{ c.ipAddr }}</td>
          <td>{{ c.totalVotes }}</td>
          <td>{{ c.buckets.length }}</td>
          <td>{{ c.pubKey in committee ? 'Yes' : '-' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getStakingCandidates, getConsensusCommittee } from '../client';

export default {
  name: 'CandidateList',
  components: {},
  data: () => {
    return { candidates: [], committee: {} };
  },
  methods: {},
  created() {
    getConsensusCommittee().then(committee => {
      for (const i in committee) {
        const member = committee[i];
        this.committee[member.pubKey] = true;
      }

      getStakingCandidates().then(data => {
        this.candidates = data;
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>

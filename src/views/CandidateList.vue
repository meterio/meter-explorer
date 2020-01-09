<template>
  <div>
    <h2>Staking Candidates</h2>
    <b-card>
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
              <router-link :to="{ name: 'account', params: { addr: c.addr } }">{{ c.addr }}</router-link>
            </td>
            <td>{{ c.ipAddr }}</td>
            <td>{{ c.totalVotes }}</td>
            <td>{{ c.buckets.length }}</td>
            <td>{{ c.committee ? 'in' : '-' }}</td>
          </tr>
        </tbody>
      </table>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';
import { getStakingCandidates, getConsensusCommittee } from '../client';

export default {
  name: 'CandidateList',
  components: {},
  data: () => {
    return { candidates: [], committee: {} };
  },
  methods: {},
  async created() {
    const candidates = await getStakingCandidates();
    this.candidates = candidates;
    for (const i in candidates) {
      const candidate = candidates[i];
      const url = `http://${candidate.ipAddr}:8669/node/consensus/committee`;
      console.log(url);
      const response = await axios.get(url);
      const committee = response.data;
      console.log(committee);
      let ref;
      ref = {};
      for (const j in committee) {
        const member = committee[j];
        ref[member.pubKey] = true;
      }
      for (const k in candidates) {
        if (candidates[k].pubKey in ref) {
          candidates[k].committee = true;
        }
      }
      this.candidates = candidates;
      console.log(this.candidates);

      break;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>

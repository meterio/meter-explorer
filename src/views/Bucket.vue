<template>
  <div>
    <h2>Bucket</h2>
    <b-card>
      <b-row>
        <b-col cols="2" class="field-name">
          <div>Id</div>
          <div>Owner</div>
          <div>Candidate</div>
          <div>Original Votes</div>
          <div>Bonus Votes</div>
          <div>Total Votes</div>
          <div>Option</div>
          <div>Created At</div>
          <div>Mature At</div>
          <div>Nonce</div>
          <div>Unbounded</div>
        </b-col>
        <b-col cols="10" class="field-value">
          <div>{{ bucket.BucketID }}</div>
          <div>
            <router-link
              :to="{ name: 'account', params: { addr: bucket.Owner } }"
            >{{ bucket.Owner }}</router-link>
          </div>
          <div>
            <router-link
              :to="{ name: 'account', params: { addr: bucket.Candidate } }"
            >{{ bucket.Candidate }}</router-link>
          </div>
          <div>{{ bucket.Value }}</div>
          <div>{{ bucket.BonusVotes }}</div>
          <div>{{ bucket.TotalVotes }}</div>
          <div>{{ bucket.Option }}</div>
          <div>{{ bucket.CreateTime }}</div>
          <div>{{ bucket.MatureTime }}</div>
          <div>{{ bucket.Nonce }}</div>
          <div>{{ bucket.Unbounded }}</div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { getStakingBucketById } from '../client';

export default {
  name: 'Bucket',
  components: {},
  data: () => {
    return { bucket: {} };
  },
  methods: {},
  created() {
    getStakingBucketById(this.$route.params.id).then(bucket => {
      this.bucket = bucket;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>

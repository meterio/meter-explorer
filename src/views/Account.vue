<template>
  <div>
    <h2>Account</h2>
    <b-card>
      <b-row>
        <b-col cols="2" class="field-name">
          <div>ID</div>
          <div>Governance Balance</div>
          <div>Meter Balance</div>
        </b-col>
        <b-col cols="10" class="field-value">
          <div>{{ $route.params.addr }}</div>
          <div class="mtrg-amount">{{ mtrgBalance | amount }}</div>
          <div class="mtr-amount">{{ mtrBalance | amount }}</div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { web3 } from "../client";
export default {
  data: function() {
    return {
      mtrgBalance: 0,
      mtrBalance: 0
    };
  },
  mounted: function() {
    web3.eth.getBalance(this.$route.params.addr).then(
      function(result) {
        this.mtrgBalance = result;
      }.bind(this)
    );

    web3.eth.getEnergy(this.$route.params.addr).then(
      function(result) {
        this.mtrBalance = result;
      }.bind(this)
    );
  }
};
</script>

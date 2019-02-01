<template>
  <div>
    <h2>Transaction</h2>
    <b-card>
      <b-row>
        <b-col cols="2" class="field-name">
          <div>ID</div>
          <div>Size</div>
          <div>Gas Used</div>
          <div>Gas Price Coef</div>
          <div>Fee</div>
          <div>Origin</div>
          <div>Fee Payer</div>
          <div>Timestamp</div>
          <div>Block</div>
          <div>Reward</div>
          <div>Block Ref</div>
          <div>Expiration</div>
          <div>Nonce</div>
          <div>Depends On</div>
          <div>Chain Tag</div>
        </b-col>
        <b-col cols="10" class="field-value">
          <div>{{tx.id}}</div>
          <div>{{tx.size}}</div>
          <div>{{tx.gas}}</div>
          <div>{{tx.gasPriceCoef}}</div>
          <div>{{tx.gas}}</div>
          <div>{{tx.origin}}</div>
          <div>Origin</div>
          <div>??</div>
          <div>{{tx.blockNumber}}</div>
          <div>{{tx.gas}}</div>
          <div>{{tx.blockRef}}</div>
          <div>{{tx.expiration}}</div>
          <div>{{tx.nonce}}</div>
          <div>-</div>
          <div>{{tx.chainTag}}</div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { web3 } from "../client";
export default {
  data: function() {
    return { tx: {} };
  },
  mounted: function() {
    web3.eth.getTransaction(this.$route.params.id).then(
      function(tx) {
        this.tx = tx;
      }.bind(this)
    );
  }
};
</script>

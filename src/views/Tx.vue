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
        <div v-if="tx.meta">
          <b-col cols="12" class="field-value">
            <div>{{tx.id}}</div>
            <div>{{tx.size}} B</div>
            <div>{{receipt.gasUsed}} / {{tx.gas}}</div>
            <div>{{tx.gasPriceCoef}}</div>
            <div class="mtr-amount">{{receipt.paid | amount}}</div>
            <div>
              <router-link :to="{name:'account', params:{addr:tx.origin}}">{{tx.origin}}</router-link>
            </div>
            <div>
              <span v-if="tx.origin === receipt.gasPayer">Origin</span>
              <router-link
                :to="{name:'account', params:{add:receipt.gasPayer}}"
                v-else
              >{{receipt.gasPayer}}</router-link>
            </div>
            <div>{{tx.meta.blockTimestamp | date}}</div>
            <div>
              <router-link
                :to="{name:'block', params: {id: tx.meta.blockID}}"
              >#{{tx.meta.blockNumber}}</router-link>
            </div>
            <div class="mtr-amount">{{receipt.reward|amount}}</div>
            <div>{{tx.blockRef}}</div>
            <div>{{tx.expiration}}</div>
            <div>{{tx.nonce}}</div>
            <div>-
              <!--
              <span v-if="tx.dependsOn != undefined">-</span>
              <router-link v-else :to="{name:'tx', params:{id:tx.dependsOn}}">{{tx.dependsOn}}</router-link>
              -->
            </div>
            <div>{{tx.chainTag}}</div>
          </b-col>
        </div>
      </b-row>
    </b-card>

    <div v-if="tx.clauses && tx.clauses.length>0 && receipt.outputs">
      <h4 class="text-gray pt-3">{{clauseText}}</h4>
      <div class="card my-2" v-for="(c,i) in tx.clauses" :key="i">
        <div class="card-body">
          <Clause :clause="c" :output="receipt.outputs?receipt.outputs[i]:null"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { web3 } from "../client";
import Clause from "../components/Clause";
export default {
  components: {
    Clause
  },
  data: function() {
    return { tx: {}, receipt: {}, clauseText: "" };
  },
  mounted: function() {
    web3.eth.getTransaction(this.$route.params.id).then(
      function(tx) {
        this.tx = tx;
        const count = tx.clauses.length;
        if (count == 0) {
          this.clauseText = "No Clause";
        } else if (count == 1) {
          this.clauseText = "1 Clause";
        } else {
          this.clauseText = count.toString() + " Clauses";
        }
      }.bind(this)
    );

    web3.eth.getTransactionReceipt(this.$route.params.id).then(
      function(receipt) {
        this.receipt = receipt;
      }.bind(this)
    );
  }
};
</script>

<template>
  <div>
    <h2>Block</h2>
    <b-card>
      <b-row>
        <b-col cols="2" class="field-name">
          <div>Height</div>
          <div>ID</div>
          <div>Size</div>
          <div>Timestamp</div>
          <div>Parent</div>
          <div>Gas Used</div>
          <div>Total Score</div>
          <div>Signer</div>
          <div>Beneficiary</div>
          <div>State Root</div>
          <div>Transaction Root</div>
          <div>Receipt Root</div>
        </b-col>
        <b-col cols="10" class="field-value">
          <div>#{{block.number}}</div>
          <div>{{block.id}}</div>
          <div>{{block.size}}</div>
          <div>{{block.timestamp}}</div>
          <div>
            <router-link :to="{name:'block', params:{id:block.parentID}}">{{block.parentID}}</router-link>
          </div>
          <div>{{block.gasUsed}}</div>
          <div>{{block.totalScore}}</div>
          <div>
            <router-link :to="{name:'account',params:{addr:block.signer}}">{{block.signer}}</router-link>
          </div>
          <div>{{block.beneficiary}}</div>
          <div>{{block.stateRoot}}</div>
          <div>{{block.txsRoot}}</div>
          <div>{{block.receiptsRoot}}</div>
        </b-col>
      </b-row>
    </b-card>

    <div v-if="block.transactions && block.transactions.length>0">
      <h4 class="text-gray pt-3">{{txText}}</h4>
      <div class="card my-2" v-for="(tx,i) in block.transactions" :key="i">
        <div class="card-body">
          {{i+1}}.
          <router-link :to="{name:'tx', params:{id:tx}}">{{tx}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { web3 } from '../client';

export default {
  props: {},
  data() {
    return {
      block: {},
      txText: '',
    };
  },
  mounted() {
    web3.eth.getBlock(this.$route.params.id).then((blk) => {
      this.block = blk;
      if (blk.transactions) {
        if (blk.transactions.length === 1) {
          this.txText = '1 Transaction';
        } else if (blk.transactions.length > 1) {
          this.txText = `${blk.transactions.length} Transactions`;
        }
      }
    });
  },
};
</script>

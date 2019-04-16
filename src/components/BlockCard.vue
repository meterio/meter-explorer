<template>
  <div class="pt-2">
    <b-card>
      <b-row>
        <b-col cols="3">
          <div class="h5">
            <router-link :to="{name:'block', params:{id:block.id}}">{{block.number}}</router-link>
          </div>
          <div>{{block.id | abbr}}</div>
          <div class="text-gray">{{block.timestamp | ago}}</div>
          <div style="display:none">{{now}}</div>
        </b-col>

        <b-col cols="3" class="text-center">
          <div class="text-uppercase">Gas Used</div>
          <div class="h5">{{block.gasUsed}}</div>
        </b-col>

        <b-col cols="3" class="text-center">
          <div class="text-uppercase">Transaction</div>
          <div class="h5">{{block.transactions.length}}</div>
        </b-col>

        <b-col cols="3" class="text-center">
          <div class="text-uppercase">Signer</div>
          <div>
            <router-link :to="{name:'account', params:{addr:block.signer}}">{{block.signer | abbr}}</router-link>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "BlockCard",
  props: {
    block: Object,
    now: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

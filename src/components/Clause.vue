<template>
  <div>
    <b-row>
      <b-col cols="2">
        <span class="badge text-uppercase" :class="output?'badge-success':'badge-error'">{{type}}</span>
      </b-col>

      <b-col cols="4">
        <span class="mr-2 text-gray">{{type==='create' ? 'deployed':'to'}}:</span>
        <router-link
          :to="{name:'account', params:{addr:clause.to||output.contractAddress}}"
        >{{clause.to||output.contractAddress | abbr}}</router-link>
      </b-col>

      <b-col cols="4">
        <span class="mr-2 text-gray">value:</span>
        <span class="mtrg-amount">{{clause.value | amount}}</span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component({
  props: {
    clause: Object,
    output: Object
  }
})
export default class Clause extends Vue {
  type = "";

  created() {
    if (this.clause.to) {
      if (this.clause.data === "0x") {
        this.type = "transfer";
      } else {
        this.type = "call";
      }
    } else {
      this.type = "create";
    }
  }
}
</script>


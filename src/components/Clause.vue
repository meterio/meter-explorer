<template>
  <div>
    <b-row>
      <b-col cols="2">
        <span
          class="badge text-uppercase"
          :class="output ? 'badge-success' : 'badge-danger'"
        >{{ type }}</span>
      </b-col>

      <b-col cols="5">
        <span class="mr-2 text-gray">{{ type === 'create' ? 'deployed' : 'to' }}:</span>
        <router-link
          :to="{
            name: 'account',
            params: { addr: clause.to || output.contractAddress }
          }"
        >{{ clause.to || output.contractAddress | abbr }}</router-link>
      </b-col>

      <b-col cols="4">
        <span class="mr-2 text-gray">value:</span>
        <span v-if="clause.token == '1'" class="mtrg-amount">{{ clause.value | amount }}</span>
        <span v-if="clause.token == '0'" class="mtr-amount">{{ clause.value | amount }}</span>
      </b-col>
      <b-col cols="1">
        <button
          v-show="clause.type !== 'transfer' && clause.type !== 'reverted'"
          class="btn btn-secondary caption my-0 py-0"
          style="height:auto;line-height:inherit;"
          @click="expand = !expand"
        >
          <span>Detail</span>
          <span v-if="!expand">&nbsp;v</span>
          <span v-if="expand">&nbsp;^</span>
          <!--
          <i>
            <v-icon
              :name="expand ? 'arrow-up' : 'arrow-down'"
              style="margin-left:3px;width:.7rem; height:.7rem;margin-bottom:2px;"
            ></v-icon>
          </i>
          -->
        </button>
      </b-col>
    </b-row>

    <b-row v-if="expand">
      <b-col cols="12">
        <template v-if="type !== 'transfer'">
          <div class="heading mt-2 mb-1">input data</div>
          <b-form-textarea plaintext rows="2" :value="clause.data" />
        </template>
        <span v-else class="text-gray">-No Data-</span>
      </b-col>

      <template v-if="!!output">
        <b-col cols="12">
          <div class="heading mt-2 mb-1">transfers</div>
          <div class="caption">
            <template v-if="output.transfers.length > 0">
              <Transfer v-for="(item, i) in output.transfers" :key="i" :item="item" :index="i + 1" />
            </template>
            <span v-else class="text-gray">- None -</span>
          </div>
        </b-col>

        <b-col cols="12">
          <div class="heading mt-2 mb-1">events</div>
          <div class="caption">
            <template v-if="output.events.length > 0">
              <Event v-for="(item, i) in output.events" :key="i" :item="item" :index="i + 1" />
            </template>
            <span v-else class="text-gray">- None -</span>
          </div>
        </b-col>
      </template>
    </b-row>
  </div>
</template>

<script>
import Event from '../components/Event';

export default {
  props: ['clause', 'output'],
  components: { Event },
  data() {
    return { type: '', expand: false };
  },
  created() {
    if (!this.output) {
      this.type = 'reverted';
    } else if (this.clause.to) {
      if (this.clause.data === '0x') {
        this.type = 'transfer';
      } else {
        this.type = 'call';
      }
    } else {
      this.type = 'create';
    }
  }
};
</script>

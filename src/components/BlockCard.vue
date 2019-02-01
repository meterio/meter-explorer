<template>
  <div class="block-card p-1">
    <b-card>
      <b-row>
        <b-col cols="2" class="field-name">
          <div>ID</div>
          <div>Height</div>
        </b-col>
        <b-col cols="10" class="field-value">
          <div>
            <router-link :to="{path:'/block/'+block.id}">{{block.id}}</router-link>
          </div>
          <div>{{block.number | abbr}}</div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "BlockCard",
  props: {
    block: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

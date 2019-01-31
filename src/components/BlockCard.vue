<template>
  <div class="block-card">{{block}}</div>
</template>

<script>
export default {
  name: "BlockCard",
  props: {
    block: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

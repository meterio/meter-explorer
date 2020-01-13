<template>
  <div>
    <h2>Metrics</h2>
    <b-card>
      <b-row>
        <b-col cols="2" class="field-name">
          <div>server</div>
        </b-col>
        <b-col cols="10" class="field-value">
          <div>{{ server }}</div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return { server: process.env.VUE_APP_SERVER };
  },
  mounted() {}
};
</script>

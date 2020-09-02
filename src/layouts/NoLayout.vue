<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

export default class NoLayout extends Vue {}
</script>

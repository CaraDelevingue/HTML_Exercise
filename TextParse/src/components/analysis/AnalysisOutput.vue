<script setup>
import { processFileStateStore } from '../../stores/counter'
const props = defineProps({
  record: {
    type: Object,
    default: null,
  },
})
const state = processFileStateStore()
</script>

<template>
  <div v-if="!state.state && props.record.text" class="main">
    <h3>原文：</h3>
    <p>{{ props.record.text }}</p>
    <h3>提取的关键字：</h3>
    <p>{{ props.record.analysis }}</p>
  </div>
</template>

<style scoped>
.main {
  overflow-y: auto;
}
</style>

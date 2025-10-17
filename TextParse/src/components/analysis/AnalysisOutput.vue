<script setup>
import { processFileStateStore } from '../../stores/counter'
import { processIsLoadingState } from '../../stores/counter'

const isLoading = processIsLoadingState()
const props = defineProps({
  record: {
    type: Object,
    default: null,
  },
})
const state = processFileStateStore()
</script>

<template>
  <div v-if="isLoading.state">
    <h3>请耐心等待结果</h3>
  </div>
  <div v-if="!state.state && props.record.text" class="main">
    <h3>原文：</h3>
    <p>{{ props.record.text }}</p>
    <h3>获取的结果：</h3>
    <p>{{ props.record.analysis }}</p>
  </div>
</template>

<style scoped>
.main {
  overflow-y: auto;
}
</style>

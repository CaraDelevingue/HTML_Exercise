<script setup>
const props = defineProps({
  record: {
    type: Object,
    default: null,
  },
})
const date = new Date(props.record.id)
const formattedTime = date.toLocaleString()
</script>

<template>
  <!--左侧历史记录面板-->
  <div class="record">
    <div v-if="props.record" class="history-record">
      <p>原文：{{ props.record.text }}</p>
      <p>结果：{{ props.record.analysis }}</p>
      <p>时间：{{ formattedTime }}</p>
    </div>
  </div>
</template>

<style scoped>
.record {
  min-height: 0;
  height: 100px;
  overflow-y: auto;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.record:hover {
  background-color: #e0e0e0;
}
</style>

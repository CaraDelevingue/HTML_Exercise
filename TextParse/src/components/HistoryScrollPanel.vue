<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!--左侧历史记录面板-->
  <div class="record">
    <div class="history-record">{{ props.msg }}</div>
  </div>
</template>

<style scoped>
.record {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.record:hover {
  background-color: #e0e0e0;
}
</style>

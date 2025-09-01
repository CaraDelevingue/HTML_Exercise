<script setup>
// 接收 v-model 的值（默认叫 modelValue）
const model = defineModel({
  type: String,
  default: '',
})
</script>

<template>
  <textarea v-model="model" class="textarea"></textarea>
</template>

<style scoped>
.textarea {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  resize: none;
}
</style>

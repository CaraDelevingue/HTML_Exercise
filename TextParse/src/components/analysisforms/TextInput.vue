<script setup>
// 接收 v-model 的值（默认叫 modelValue）
const model = defineModel({
  type: String,
  default: '',
})
</script>

<template>
  <textarea v-model="model" class="textarea" placeholder="请输入您想要分析的内容"></textarea>
</template>

<style scoped>
.textarea {
  padding: 10px 15px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  resize: none;

  border: 2px solid;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  border-color: #e0e0e0;
}
.textarea:focus {
  border-color: #a8a8a8;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.textarea:hover:not(:focus) {
  border-color: #a0a0a0;
}
</style>

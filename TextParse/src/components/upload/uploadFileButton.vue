<script setup>
const props = defineProps({
  disabled: { type: Boolean, default: true },
})
const emit = defineEmits(['click'])

const onClick = () => {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<template>
  <button
    :disabled="props.disabled"
    @click="onClick"
    :class="[props.disabled ? 'submitFile--disabled' : 'submitFile']"
  >
    上传文件
  </button>
</template>

<style scoped>
.submitFile {
  height: 100%;
  width: 100px;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
}
.submitFile:hover:not(:disabled) {
  border-color: #4caf50;
  background: #e8f5e8;
}
.submitFile--disabled {
  height: 100%;
  width: 100px;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  background: #cccccc;
  cursor: not-allowed;
}
</style>

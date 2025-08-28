<script setup>
const modelValue = defineModel()

 defineProps({
  placeholder: {
    type: String,
    default: '请输入内容...',
  },
})
</script>

<template>
  <input
    :value="modelValue"
    @input="($event) => (modelValue = $event.target.value)"
    :placeholder="placeholder"
    type="text"
    class="text-input"
  />
</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <p>nihao</p>
  <div>{{ props.content }}</div>
</template>

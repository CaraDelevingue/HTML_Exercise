<script setup>
const props = defineProps({
  file: {
    type: File,
    default: null,
  },
})
const emit = defineEmits(['click'])

const handleclearFile = () => {
  emit('click', event)
}
</script>

<template>
  <button v-if="props.file" @click="handleclearFile" class="clearButton" title="清除文件">×</button>
</template>

<style scoped>
.clearButton {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  padding: 4px;
  background: #e4a6a6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.clearButton:hover {
  background: #ee5253;
}
</style>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

function handleclick(event) {
  if (props.disabled) return
  emit('click', event)
}
</script>
<template>
  <button @click="handleclick" :disabled="disabled" class="my-btn">
    <slot>关键字提取</slot>
  </button>
</template>

<style scoped>
/* 按钮的基本样式 */
.my-btn {
  padding: 8px 16px; /* 内边距 */
  background-color: #007bff; /* 蓝色背景 */
  color: white; /* 白色文字 */
  border: none; /* 去掉边框 */
  border-radius: 4px; /* 圆角 */
  cursor: pointer; /* 鼠标放上去变成手型 */
  font-size: 14px; /* 字体大小 */
}

/* 鼠标放上去时的颜色 */
.my-btn:hover {
  background-color: #0056b3;
}

/* 禁用状态的样式 */
.my-btn:disabled {
  background-color: #ccc; /* 灰色 */
  cursor: not-allowed; /* 鼠标变成禁止符号 */
}
</style>

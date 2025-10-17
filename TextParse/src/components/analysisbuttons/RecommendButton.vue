<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(['click'])

function handleclick(event) {
  emit('click', event)
}
</script>
<template>
  <button :disabled="disabled" @click="handleclick" class="my-btn">
    <slot>获取摘要</slot>
  </button>
</template>

<style scoped>
/* 按钮的基本样式 */
.my-btn {
  height: 35px;
  width: 110px;
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

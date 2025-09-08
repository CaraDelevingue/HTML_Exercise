<script setup>
import AnalysisInput from '../analysis/AnalysisInput.vue'
import AnalysisOutput from '../analysis/AnalysisOutput.vue'
import DeepSeek from '../../utils/DeepSeek.vue'
import { reactive, ref } from 'vue'
import { processFileStateStore } from '../../stores/counter'

const textContent = ref('')
const extractionError = ref('')
const state = processFileStateStore()

const newHistorialRecord = reactive({
  text: '',
  analysis: '',
})
const emit = defineEmits(['update'])

const clearTextContent = () => {
  textContent.value = ''
}
// 提取完成时的回调
const handleExtracted = (keywords) => {
  console.log('✅ 自动收到关键词:', keywords)
  newHistorialRecord.text = textContent.value
  newHistorialRecord.analysis = keywords
  emit('update', newHistorialRecord)
  state.deactive()
  clearTextContent()
}

// 提取失败时的回调
const handleError = (error) => {
  console.error('❌ 提取失败:', error)
  extractionError.value = error
}
</script>

<template>
  <div class="output">
    <AnalysisOutput :record="newHistorialRecord" />
    <DeepSeek :textContent="textContent" @extracted="handleExtracted" @error="handleError" />
  </div>
  <div class="input">
    <AnalysisInput v-model:content="textContent" />
  </div>
</template>

<style>
.output,
.input {
  border-bottom: 10px solid #ddd;
}
.output {
  flex: 7;
  overflow-y: auto;
  min-height: 0;
  background-color: #fff;
  padding: 50px;
}

.input {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  flex: 3;
  background-color: #f9f9f9;
  border: 1px solid #ccc; /* 可视化边框（可选） */
  box-sizing: border-box;
}
</style>

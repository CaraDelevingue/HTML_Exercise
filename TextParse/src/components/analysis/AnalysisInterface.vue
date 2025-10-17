<script setup>
import AnalysisInput from '../analysis/AnalysisInput.vue'
import AnalysisOutput from '../analysis/AnalysisOutput.vue'
import DeepSeek from '../../composables/DeepSeek.vue'
import { RequestApi } from '../../composables/useApi'
import { reactive, ref } from 'vue'
import { processFileStateStore, processIsLoadingState } from '../../stores/counter'

const textContent = ref('')
const extractionError = ref('')
const state = processFileStateStore()
const isLoading = processIsLoadingState()

const { sendJson } = RequestApi()

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
  console.log(' 自动收到关键词:', keywords)
  newHistorialRecord.text = textContent.value
  newHistorialRecord.analysis = keywords
  emit('update', newHistorialRecord)
  state.deactive()
  clearTextContent()
}

// 提取失败时的回调
const handleError = (error) => {
  console.error(' 提取失败:', error)
  extractionError.value = error
}

//向本地fastapi发送请求
const handleRequest = async (Text) => {
  console.log('开始向后端发送数据')
  isLoading.active()
  const data = {
    content: Text,
    date: new Date().toISOString(),
  }
  try {
    const response = await sendJson(data)
    console.log(' 收到后端响应:', response)
    newHistorialRecord.text = Text
    newHistorialRecord.analysis = response
    emit('update', newHistorialRecord)
    state.deactive()
  } catch (err) {
    console.error('向后端发送数据并获取响应失败:', err)
  } finally {
    isLoading.deactive()
  }
}
</script>

<template>
  <div class="output">
    <AnalysisOutput :record="newHistorialRecord" />
    <DeepSeek :textContent="textContent" @extracted="handleExtracted" @error="handleError" />
  </div>
  <div class="input">
    <AnalysisInput v-model:content="textContent" @request="handleRequest" />
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

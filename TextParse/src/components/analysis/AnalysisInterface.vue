<script setup>
import AnalysisInput from '../analysis/AnalysisInput.vue'
import AnalysisOutput from '../analysis/AnalysisOutput.vue'
import DeepSeek from '../../utils/DeepSeek.vue'
import { ref } from 'vue'

const textContent = ref('')

const extractedKeywords = ref('')
const extractionError = ref('')

// 提取完成时的回调
const handleExtracted = (keywords) => {
  console.log('✅ 自动收到关键词:', keywords)
  extractedKeywords.value = keywords
  // 这里可以进一步处理关键词，比如存储或分析
}

// 提取失败时的回调
const handleError = (error) => {
  console.error('❌ 提取失败:', error)
  extractionError.value = error
}
</script>

<template>
  <div class="output">
    <p>this is output area</p>
    <AnalysisOutput :content="textContent" />
    <DeepSeek :textContent="textContent" @extracted="handleExtracted" @error="handleError" />
    <div v-if="extractedKeywords" style="margin-top: 20px">
      <h3>最终关键词：</h3>
      <p>采一朵哈吉花</p>
      <p>{{ extractedKeywords }}</p>
    </div>

    <div v-if="extractionError" style="color: red; margin-top: 20px">
      <p>送给哈吉粉</p>
      错误: {{ extractionError }}
    </div>
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
  flex: 1;
  overflow-y: auto;
  background-color: #fff;
}

.input {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  height: 200px;
  background-color: #f9f9f9;
  border: 1px solid #ccc; /* 可视化边框（可选） */
  box-sizing: border-box;
}
</style>

<script setup>
import AnalysisButton from '../analysisbuttons/AnalysisButton.vue'
import RecommendButton from '../analysisbuttons/RecommendButton.vue'
import TextInput from '../analysisforms/TextInput.vue'
import { ref } from 'vue'
import uploadFile from '../upload/uploadFile.vue'
import { processFileStateStore } from '../../stores/counter'

const emit = defineEmits(['update:content', 'request'])
const state = processFileStateStore()
defineProps({
  content: {
    type: String,
    default: '',
  },
})

const text = ref('')
const clearText = () => {
  text.value = ''
}

const handleAnalysis = () => {
  state.active()
  emit('update:content', text.value)
  clearText()
}

const handleRecommend = () => {
  console.log('向后端发送数据最开始')
  state.active()
  emit('request', text.value)
  console.log('成功向父组件传递数据')
  clearText()
}
</script>

<template>
  <div class="file">
    <!--读取文件区域-->
    <uploadFile v-model:text="text" />
  </div>
  <div class="textinput">
    <!--文本框区域-->
    <TextInput v-model="text" class="textarea" />
  </div>
  <div class="button">
    <!--按钮区域-->
    <div class="analysis-button">
      <!--分析按钮，向deepseek发送请求获取文本关键字提取-->
      <AnalysisButton :disabled="!text || state.state" @click="handleAnalysis" />
    </div>
    <div class="recommend-button">
      <!--向本地后端fastapi发送请求，获取本地后端部署的模型响应-->
      <RecommendButton :disabled="!text || state.state" @click="handleRecommend" />
    </div>
  </div>
</template>

<style scoped>
.file {
  flex: 0 0 20%;
  border-bottom: 5px solid #f9f9f9;
  display: flex;
  flex-direction: row;
  padding-left: 3%;
  gap: 30px;
}
.textinput {
  flex: 1;
  min-height: 0;
  width: 100%;
  padding: 10px;
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
}
.button {
  flex: 0 0 15%;
  border-top: 5px solid #f9f9f9;
  padding-left: 3%;
  display: flex;
  flex-direction: row;
  gap: 30px;
}
</style>

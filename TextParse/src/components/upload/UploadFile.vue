<script setup>
import { ref } from 'vue'
import inputFileButton from './inputFileButton.vue'
import UploadFileButton from './uploadFileButton.vue'
import ClearFileButton from './clearFileButton.vue'

const emit = defineEmits(['update:text'])
defineProps({
  text: { type: String, default: '' },
})

const error = ref('')
//从文件中读取的内容
const extractedText = ref('')
//用户上传的文件
const selectedFile = ref(null)

//点击文件上传，将读取到的内容返回给父组件
const handleUploadFile = () => {
  emit('update:text', extractedText.value.trim())
  handleclearFile()
}

//清除用户上传的文件
const handleclearFile = () => {
  selectedFile.value = null
  extractedText.value = null
  error.value = null
}
</script>

<template>
  <div class="inputFile">
    <inputFileButton v-model:inputText="extractedText" v-model:inputFile="selectedFile" />
    <ClearFileButton :file="selectedFile" @click="handleclearFile" />
  </div>
  <div class="uploadFileButton">
    <uploadFileButton :disabled="!selectedFile" @click="handleUploadFile" />
  </div>
</template>

<style scoped>
.inputFile {
  position: relative;
  display: inline-block;
}

.uploadFileButton {
  height: auto;
}
</style>

<script setup>
import { ref } from 'vue'
import { parsePdf } from './parsePdf'
import { parseTxt } from './parseTxt'
import { parseWord } from './parseWord'

const props = defineProps({
  inputText: {
    type: String,
    default: '',
  },
  inputFile: {
    type: File,
    fault: null,
  },
})
//将读取到的内容和上传的文件都返回
const emit = defineEmits(['update:inputText', 'update:inputFile'])

const isLoading = ref(false)
const error = ref('')
//从文件中读取的内容
const extractedText = ref('')
//用户上传的文件
const selectedFile = ref(null)

//用户上传文件后，解析文件内容的文字并存储于本地对象extractedText中
async function handleInputFile(event) {
  const file = event.target.files[0]
  isLoading.value = true
  if (!file) return
  //初始化文本框状态
  selectedFile.value = file //更新用户上传的文件
  error.value = ''
  extractedText.value = ''
  try {
    //允许输入.txt,.docx,.pdf类型文件
    //根据选择文件的类型不同，调用不同方法读取内容，规定类型外的文件返回错误
    //将读取的内容存储于extracedText中
    if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
      //文件类型为.txt
      extractedText.value = await parseTxt(file)
    } else if (
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      file.name.endsWith('.docx')
    ) {
      //文件类型为.docx
      extractedText.value = await parseWord(file)
    } else if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      //文件类型为.pdf
      extractedText.value = await parsePdf(file)
    } else {
      //其他文件类型
      throw new Error('不支持的数据类型')
    }
  } catch (err) {
    error.value = '解析失败' + err.message
  } finally {
    //将内容和文件返回
    emit('update:inputText', extractedText.value)
    emit('update:inputFile', selectedFile.value)
    //上传结束，更新状态
    isLoading.value = false
    event.target.value = ''
    selectedFile.value = null
    extractedText.value = ''
  }
}
</script>

<template>
  <label class="decoratedUploader" :class="{ 'has-file': props.inputFile }">
    <span class="label-icon">📂</span>
    <span class="label-text">{{ props.inputFile ? props.inputFile.name : '选择文件' }}</span>
    <input
      type="file"
      @change="handleInputFile"
      :accept="'.txt,.docx,.pdf'"
      class="originalUploader"
    />
    {{ extractedText.value }}
  </label>
</template>

<style scoped>
.originalUploader {
  display: none;
}
.decoratedUploader {
  display: inline-block;
  padding: 12px 40px 12px 24px;
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 150px;
}
.decoratedUploader:hover {
  border-color: #4caf50;
  background: #e8f5e8;
}
.decoratedUploader.has-file {
  border-style: solid;
  border-color: #4caf50;
  background: #e8f5e8;
}
.label-icon {
  font-size: 18px;
}
.label-text {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 150px;
}
</style>

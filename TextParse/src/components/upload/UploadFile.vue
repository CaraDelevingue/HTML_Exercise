<script setup>
import { ref } from 'vue'
import { parsePdf } from './parsePdf'
import { parseTxt } from './parseTxt'
import { parseWord } from './parseWord'

const emit = defineEmits(['update:text'])

defineProps({
  text: { type: String, default: '' },
})

const handleUploadFile = () => {
  emit('update:text', extractedText.value)
}

const isLoading = ref(false)
const error = ref('')
const extractedText = ref('')

async function handleFileUpload(event) {
  const file = event.target.files[0]
  if (!file) return
  error.value = ''
  extractedText.value = ''
  isLoading.value = ''
  try {
    if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
      extractedText.value = await parseTxt(file)
    } else if (
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      file.name.endsWith('.docx')
    ) {
      extractedText.value = await parseWord(file)
    } else if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      extractedText.value = await parsePdf(file)
    } else {
      throw new Error('不支持的数据类型')
    }
  } catch (err) {
    error.value = '解析失败' + err.message
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="uploader">
    <input type="file" @change="handleFileUpload" :accept="'.txt,.docx,.pdf'" />
  </div>
  <button @click="handleUploadFile">上传文件</button>
</template>

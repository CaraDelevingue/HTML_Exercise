<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'
import { sendMessage } from './DeepSeek'

const props = defineProps({
  textContent: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['extracted', 'error'])

const keywords = ref('')
const isLoading = ref(false)
const error = ref('')

watch(
  () => props.textContent,
  (newText) => {
    // if (newText && newText.trim().length > 10) {
    //   extractKeywords(newText)
    // }
    if (isLoading.value) extractKeywords(newText)
  },
)

const extractKeywords = async (text) => {
  isLoading.value = true
  error.value = ''
  keywords.value = ''
  try {
    console.log('请求开始')
    const prompt = `请从以下文本中提取关键字，要求：
    1. 关键词必须是文本中实际出现的重要内容
    2. 每个关键词应该是2-5个字的短语
    3. 用中文逗号分隔关键词
    4. 不要添加任何解释和额外文本
    待分析文本：
    ${text}`
    const response = await sendMessage([
      {
        role: 'system',
        content: '你是一个专业的关键词提取助手，只需返回关键词，不添加任何解释。',
      },
      { role: 'user', content: prompt },
    ])
    const rawKeywords = response.choices[0].message.content
    const cleanedKeywords = clean(rawKeywords)
    emit('extracted', cleanedKeywords)
    console.log('✅ 请求成功：数据已成功获取并处理')
  } catch (err) {
    error.value.err.message
    emit('error', err.message)
    console.error('关键词提取失败:', err) // 添加日志便于调试
  } finally {
    isLoading.value = false
  }
}

const clean = (rawText) => {
  //防止返回的undefined或者null或者非字符串格式
  if (!rawText || typeof rawText !== 'string') return ''
  return rawText
    .replace(/\s+/g, '') // 移除空格
    .replace(/[, ，、;；]+/g, '，') // 统一分隔符
    .replace(/^，+|，+$/g, '') // 去除首尾逗号
    .split('，')
    .filter((keyword) => keyword) // && keyword.length >= 2)
    .join('，')
}
</script>

<template>
  <p>开局我还是一只小小d啊</p>
</template>

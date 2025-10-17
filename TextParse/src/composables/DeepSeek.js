import axios from 'axios'

// 创建 Axios 实例
const deepSeekApi = axios.create({
  baseURL: import.meta.env.VITE_DEEPSEEK_BASE_URL + '/chat',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
  },
  timeout: 120000,
})

// 定义发送消息的函数
export const sendMessage = async (messages, model = 'deepseek-chat') => {
  try {
    const response = await deepSeekApi.post('/completions', {
      model,
      messages, // messages 应是一个数组
      stream: false, // 非流式响应
      temperature: 1.0,
    })
    return response.data
  } catch (error) {
    console.error('调用 DeepSeek API 失败:', error)
    throw error // 或者处理错误，返回友好提示
  }
}

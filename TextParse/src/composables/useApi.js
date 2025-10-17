export function RequestApi() {
  // 模拟向后端发送 JSON
  const sendJson = async (data) => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/message/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      //返回后端响应的数据
      const response = await res.json()
      const { content } = response
      return content
    } catch (err) {
      console.error('发送失败:', err)
      //调用组件捕获error
      throw err
    }
  }
  return { sendJson }
}

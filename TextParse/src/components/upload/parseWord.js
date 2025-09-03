import mammoth from 'mammoth'

export async function parseWord(file) {
  try {
    const arrayBuffer = await file.arrayBuffer()
    const result = await mammoth.extractRawText({ arrayBuffer })
    return result.value
  } catch (err) {
    console.error('Word解析失败：', err)
    throw new Error('无法解析Word文件，请检查文件是否损坏')
  }
}

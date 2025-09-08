import mammoth from 'mammoth'

export async function parseWord(file) {
  try {
    //将文件转为mammoth所能接受的二进制数据流
    const arrayBuffer = await file.arrayBuffer()
    //通过mammoth获取内容
    const result = await mammoth.extractRawText({ arrayBuffer })
    return result.value
  } catch (err) {
    console.error('Word解析失败：', err)
    throw new Error('无法解析Word文件，请检查文件是否损坏')
  }
}

export async function parseTxt(file) {
  try {
    return await file.text()
  } catch (err) {
    console('Txt解析失败：', err)
    throw new Error('无法解析Txt文件，请检查文件是否损坏')
  }
}

import * as pdfjsLib from 'pdfjs-dist'
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'

export async function parsePdf(file) {
  //将文件转为pdfjs所能接受的二进制数据流
  const arrayBuffer = await file.arrayBuffer()
  try {
    //通过pdfjs读取内容
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
    const numPages = pdf.numPages

    let text = ''
    //逐页获取内容
    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i)
      const content = await page.getTextContent()
      const pageText = content.items.map((item) => item.str).join(' ')
      text += pageText + '\n'
    }
    return text
  } catch (err) {
    console.error('pdf解析失败：', err)
    throw new Error('无法解析PDF文件，请检查文件是否损坏')
  }
}

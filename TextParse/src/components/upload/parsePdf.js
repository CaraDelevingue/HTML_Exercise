import * as pdfjsLib from 'pdfjs-dist'
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'

export async function parsePdf(file) {
  const arrayBuffer = await file.arrayBuffer()
  try {
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
    const numPages = pdf.numPages

    let text = ''
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

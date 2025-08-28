<script setup>
import { ref } from 'vue'
import HistoryScrollPanel from '../components/HistoryScrollPanel.vue'
import InputPanel from '../components/InputPanel.vue'
import OutputPanel from '../components/OutputPanel.vue'

const msgs = ref([
  '2025-08-27 分析: "今天的天气..."',
  '2025-08-27 分析: "今天的天气..."',
  '2025-08-25 分析: "会议纪要..."',
])

const texts = ref([
  '这是一段较短的分析结果，用于测试布局是否正常。',
  '这是一段非常长的分析结果。它包含了大量文本，用于测试当内容很多时，容器是否能正确换行并自动撑高。比如：自然语言处理模型在分析用户输入时，会提取关键词、情感倾向、主题分类等信息。本系统基于BERT模型，准确率达到95%以上。支持多语言、多领域分析。未来可扩展为智能客服、舆情监控等场景。',
  '另一个分析结果示例。支持包含 URL 链接：https://example.com/very-long-path-for-testing-word-break以及代码片段：function hello() { console.log("自适应高度"); }',
])
</script>

<template>
  <main class="main">
    <div class="history">
      <ul v-for="(msg, index) in msgs" :key="index">
        <HistoryScrollPanel :msg="msg" />
      </ul>
    </div>
    <div class="task">
      <div class="output-panel">
        <ul v-for="(text, index) in texts" :key="index">
          <OutputPanel :text="text" />
        </ul>
      </div>
      <div class="input-panel">
        <InputPanel />
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex: 1;
  width: 100%;
}
.history {
  width: 33.33%; /* 占据1/3宽度 */
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}
.task {
  width: 66.67%; /* 占据2/3宽度 */
  display: flex;
  flex-direction: column;
  background-color: grey;
}

.task-panel {
  display: flex;
  flex-direction: column;
  height: 100%; /* 或 min-height: 100% */
}
.output-panel,
.input-panel {
  border-bottom: 1px solid #ddd;
}
.output-panel {
  flex: 1;
  overflow-y: auto;
  background-color: #fff;
}

.input-panel {
  height: 200px;
  background-color: #f9f9f9;
}
</style>

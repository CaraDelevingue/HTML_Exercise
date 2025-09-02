<script setup>
import { ref } from 'vue'
import AnalysisHistory from '../components/analysis/AnalysisHistory.vue'
import AnalysisInterface from '../components/analysis/AnalysisInterface.vue'

const msgs = ref([
  '2025-08-27 分析: "今天的天气..."',
  '2025-08-27 分析: "今天的天气..."',
  '2025-08-25 分析: "会议纪要..."',
])
</script>

<template>
  <main class="main">
    <div class="history">
      <p>历史记录：</p>
      <ul v-for="(msg, index) in msgs" :key="index">
        <AnalysisHistory :msg="msg" />
      </ul>
    </div>
    <div class="interface">
      <AnalysisInterface />
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
  background-color: #f8f9fa;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}
.interface {
  width: 66.67%; /* 占据2/3宽度 */
  display: flex;
  flex-direction: column;
  background-color: #fffff0;
  padding: 10px;
}
</style>

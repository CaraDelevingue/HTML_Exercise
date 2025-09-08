<script setup>
import { reactive } from 'vue'
import AnalysisHistory from '../components/analysis/AnalysisHistory.vue'
import AnalysisInterface from '../components/analysis/AnalysisInterface.vue'

//历史记录列表
const historialRecords = reactive([])

//添加一条历史记录
const addHistorialRecord = (newHistorialRecord) => {
  console.log(newHistorialRecord.text, newHistorialRecord.analysis)
  if (newHistorialRecord.text && newHistorialRecord.analysis) {
    historialRecords.push({
      ...newHistorialRecord,
      id: Date.now(),
    })
  }
}
</script>

<template>
  <div class="history">
    <div class="history-header">
      <p>历史记录：</p>
    </div>
    <div class="history-content">
      <ul>
        <li v-for="(record, index) in historialRecords" :key="index">
          <AnalysisHistory :record="record" />
        </li>
      </ul>
    </div>
  </div>
  <div class="interface">
    <AnalysisInterface @update="addHistorialRecord" />
  </div>
</template>

<style scoped>
.history {
  flex: 0 0 30%;
  background-color: #f8f9fa;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 10px;
}
.history-header {
  flex: 1;
  background: white;
  border-bottom: 1px solid #eee;
}

.history-header p {
  margin: 0;
  font-weight: 600;
}
.history-content {
  background: white;
  flex: 13;
  overflow-y: auto;
  padding: 16px;
}
.history-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.history-content li {
  padding: 12px 0;
  border-bottom: 1px solid #e9ecef;
}
.interface {
  flex: 0 0 70%;
  display: flex;
  flex-direction: column;
  background-color: #fffff0;
  padding: 10px;
  padding-left: 5%;
  padding-right: 5%;
  min-width: 0;
}
</style>

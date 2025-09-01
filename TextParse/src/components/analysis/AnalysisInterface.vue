<script setup>
import AnalysisInput from '../analysis/AnalysisInput.vue'
import AnalysisOutput from '../analysis/AnalysisOutput.vue'
import { ref } from 'vue'

const textContent = ref('')
</script>

<template>
  <div class="output">
    <p>this is output area</p>
    <AnalysisOutput :content="textContent" />
  </div>
  <div class="input">
    <AnalysisInput v-model:content="textContent" />
  </div>
</template>

<style>
.output,
.input {
  border-bottom: 10px solid #ddd;
}
.output {
  flex: 1;
  overflow-y: auto;
  background-color: #fff;
}

.input {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  height: 200px;
  background-color: #f9f9f9;
  border: 1px solid #ccc; /* 可视化边框（可选） */
  box-sizing: border-box;
}
</style>

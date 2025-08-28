<script setup>
import AnalysisButton from './AnalysisButton.vue'
import { ref } from 'vue'
import TextInput from './TextInput.vue'
const text = ref('')
</script>

<template>
  <div class="analysis-button">
    <AnalysisButton disabled>关键字提取</AnalysisButton>
  </div>
  <div>
    <TextInput v-model="text" placeholder="请输入..." />
    <p>输入内容：{{ text }}</p>
  </div>
</template>

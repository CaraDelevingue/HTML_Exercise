<script setup>
import AnalysisButton from '../analysisbuttons/AnalysisButton.vue'
import TextInput from '../analysisforms/TextInput.vue'
import { ref } from 'vue'

const emit = defineEmits(['update:content'])
defineProps({
  content: {
    type: String,
    default: '',
  },
})

const text = ref('')

const handleAnalysis = () => {
  emit('update:content', text.value)
}
</script>

<template>
  <div class="file">
    <p>file</p>
  </div>
  <div class="textinput">
    <TextInput v-model="text" class="textarea" />
  </div>
  <div class="button">
    <div class="analysis-button">
      <AnalysisButton @click="handleAnalysis">关键字提取</AnalysisButton>
    </div>
  </div>
</template>

<style scoped>
.file {
  flex: 0 0 20%;
  border-bottom: 5px solid #f9f9f9;
}
.textinput {
  flex: 1;
  min-height: 0;
  width: 100%;
  padding: 10px;
  display: flex;
}
.button {
  flex: 0 0 15%;
  border-top: 5px solid #f9f9f9;
}
</style>

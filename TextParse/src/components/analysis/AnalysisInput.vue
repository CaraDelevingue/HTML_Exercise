<script setup>
import AnalysisButton from '../analysisbuttons/AnalysisButton.vue'
import TextInput from '../analysisforms/TextInput.vue'
import { ref } from 'vue'
import uploadFile from '../upload/uploadFile.vue'
import { processFileStateStore } from '../../stores/counter'

const emit = defineEmits(['update:content'])
const state = processFileStateStore()
defineProps({
  content: {
    type: String,
    default: '',
  },
})

const text = ref('')
const clearText = () => {
  text.value = ''
}

const handleAnalysis = () => {
  state.active()
  emit('update:content', text.value)
  clearText()
}
</script>

<template>
  <div class="file">
    <uploadFile v-model:text="text" />
  </div>
  <div class="textinput">
    <TextInput v-model="text" class="textarea" />
  </div>
  <div class="button">
    <div class="analysis-button">
      <AnalysisButton :disabled="!text || state.state" @click="handleAnalysis" />
    </div>
  </div>
</template>

<style scoped>
.file {
  flex: 0 0 20%;
  border-bottom: 5px solid #f9f9f9;
  display: flex;
  flex-direction: row;
  padding-left: 3%;
  gap: 30px;
}
.textinput {
  flex: 1;
  min-height: 0;
  width: 100%;
  padding: 10px;
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
}
.button {
  flex: 0 0 15%;
  border-top: 5px solid #f9f9f9;
  padding-left: 3%;
}
</style>

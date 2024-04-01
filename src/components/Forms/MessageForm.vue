<template>
  <div class="creator-form answer">
    <label for="trigger">Trigger Message</label>
    <input name="trigger" v-model="description.parameters.triggerMSg">
    <label for="msg">Answer Message</label>
    <input name="msg" v-model="description.parameters.message">
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { FormDescription } from '@/utils/DescTypes'

const { id } = defineProps(['id'])


const description: FormDescription = reactive({
  id: id,
  type: 'answer',
  parameters: {
    message: '',
    triggerMSg: '',
    buttons: []
  },
  children: []
})
const getFormData = () => {
  return description
}

defineExpose({
  description,
  getFormData
})
</script>

<style scoped>
@import '@/assets/botCreator.css';
</style>
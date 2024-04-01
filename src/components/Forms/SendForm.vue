<template>
  <div class="creator-form send">
    <label for="msg">Send Message</label>
    <input name="msg" v-model="description.parameters.message">
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { FormDescription } from '@/utils/DescTypes'

const { id } = defineProps(['id'])

const description: FormDescription = reactive({
  id: id,
  type: 'send',
  parameters: {
    message: '',
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
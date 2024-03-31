<template>
  <div class="creator-form answer">
    <label for="trigger">Trigger Message</label>
    <input name="trigger" v-model="description.parameters.triggerMSg">
    <label for="msg">Answer Message</label>
    <input name="msg" v-model="description.parameters.message">
    <button @click="emit('sendData', description)">Save ({{id}})</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const emit = defineEmits(['sendData'])
const { id } = defineProps(['id'])


const description = reactive({
  id: id,
  type: 'answer',
  parameters: {
    message: '',
    triggerMSg: '',
    buttons: []
  },
  children: []
})
</script>

<style scoped>
@import '@/assets/botCreator.css';
</style>
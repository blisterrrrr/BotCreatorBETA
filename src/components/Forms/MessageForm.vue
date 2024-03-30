<template>
  <div class="creator-form">
    <label for="trigger">Trigger Message</label>
    <input name="trigger" v-model="trigger">
    <label for="msg">Answer Message</label>
    <input name="msg" v-model="message">
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const trigger = ref<string>('')
const message = ref<string>('')


const description = reactive({
  type: 'start',
  parameters: {
    message: message,
    triggerMSg: trigger,
    buttons: {}
  },
  children: {}
})
</script>

<style scoped>
@import '@/assets/botCreator.css';
</style>
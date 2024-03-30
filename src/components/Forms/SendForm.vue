<template>
  <div class="creator-form send">
    <label for="msg">Send Message</label>
    <input name="msg" v-model="description.parameters.message">
    <button @click="emit('sendData', description)">Save</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, reactive, ref } from 'vue'

const emit = defineEmits(['sendData'])

const description = reactive({
  type: 'send',
  parameters: {
    message: '',
    buttons: []
  },
  children: []
})
</script>

<style scoped>
@import '@/assets/botCreator.css';
</style>
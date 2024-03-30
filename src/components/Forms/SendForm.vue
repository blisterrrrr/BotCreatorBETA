<template>
  <div class="creator-form send">
    <label for="msg">Send Message</label>
    <input name="msg" v-model="description.parameters.message">
    <button @click="emit('sendData', description)">Save ({{id}})</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, reactive, ref } from 'vue'

const emit = defineEmits(['sendData'])
const { id } = defineProps(['id'])

const description = reactive({
  id: id,
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
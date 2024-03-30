<template>
  <div class="creator-form">
    <label for="msg">Start Message</label>
    <input :value="props.msg" name="msg">
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const props = defineProps({
  msg: String
})

const description = reactive({
  type: 'start',
  parameters: {
    message: props.msg,
    buttons: {}
  },
  children: {}
})
</script>

<style scoped>
@import '@/assets/botCreator.css';
</style>
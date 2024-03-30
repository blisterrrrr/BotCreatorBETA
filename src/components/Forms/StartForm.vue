<template>
  <div class="creator-form">
    <label for="msg">Start Message</label>
    <input name="msg" v-model="description.parameters.message">
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, reactive, ref, watch } from 'vue'

const props = defineProps(['msg', 'clear', 'id'])

const emit = defineEmits(['sendData'])

const description = reactive({
  id: props.id,
  type: 'start',
  parameters: {
    message: props.msg,
    buttons: []
  },
  children: []
})

const hook = () => {
  emit('sendData', description)
}

watch(() => props.clear, () => {
  console.log('start')
  emit('sendData', description)
})

onMounted(hook)

onUpdated(hook)

</script>

<style scoped>
@import '@/assets/botCreator.css';
</style>
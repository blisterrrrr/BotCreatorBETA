<template>
  <div class="creator-form">
    <label for="msg">Start Message</label>
    <input name="msg" v-model="description.parameters.message">
  </div>
</template>

<script setup lang="ts">
import { reactive} from 'vue'

const props = defineProps(['msg', 'id'])

const description = reactive({
  id: props.id,
  type: 'start',
  parameters: {
    message: props.msg,
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
<script setup lang="ts">
import { useNameStore } from '@/stores/name'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import router from '@/router'

const nameStore = useNameStore()

const {name} = storeToRefs(nameStore)
const {getFromLS, setDefaultName, saveToLS} = nameStore

onMounted(() => {
  const innername = getFromLS()
  if (!innername) {
    setDefaultName()
    return
  }
  name.value = innername
})

const handleForm = () => {
  saveToLS()
  router.push({name: 'builder'})
}
</script>

<template>
  <main class="center">
    <form @submit.prevent="handleForm">
      <label for="username">Enter Bot's Name</label> <br>
      <input type="text" name="username" v-model="name">
      <input type="submit" value="Enter" :disabled="!name">
    </form>
  </main>
</template>

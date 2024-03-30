<script setup lang="ts">
import { useNameStore } from '@/stores/name'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import StartForm from '@/components/Forms/StartForm.vue'
import MessageForm from '@/components/Forms/MessageForm.vue'
import { useTitle } from '@vueuse/core'

const nameStore = useNameStore()
const { LSName } = storeToRefs(nameStore)
const helloMsg = computed(() => (`Welcome to ${LSName.value}`))

const compList = [MessageForm]

useTitle(computed(() => `Creating ${LSName.value}`))

const save = () => {
  console.log('Hello!')
}
</script>

<template>
  <div>
    <h1>Bot Name: {{ LSName }}</h1>
    <button style="margin-bottom: 20px">Save</button>
    <StartForm :msg="helloMsg" />
    <component :is="compList[0]" />
  </div>
</template>
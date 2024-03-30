<script setup lang="ts">
import { useNameStore } from '@/stores/name'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import StartForm from '@/components/Forms/StartForm.vue'
import MessageForm from '@/components/Forms/MessageForm.vue'
import { useTitle } from '@vueuse/core'
import { useBotStore } from '@/stores/botStore'
import Modal from '@/components/Modal.vue'
import { formsAvailable } from '@/utils/FormsAvailable.ts'

// Name store
const nameStore = useNameStore()
const { LSName } = storeToRefs(nameStore)
const helloMsg = computed(() => (`Welcome to ${LSName.value}`))

//BotJSON store
const botStore = useBotStore()
const { botCode } = storeToRefs(botStore)
const { saveAfterStart, clear } = botStore

const clearing = ref(false)
const isOpen = ref(false)
const compList = ref([MessageForm, MessageForm])

useTitle(computed(() => `Creating ${LSName.value}`))

const clearCode = () => {
  clearing.value = true
  clear()
  clearing.value = false
}

const handleFormData = (data) => {
  clearCode()
  saveAfterStart(data)
}

const save = () => {
  console.log(JSON.stringify(botCode.value))
  clearCode()
}
</script>
<template>
  <h1>Bot Name: {{ LSName }}</h1>
  <button @click="save" style="margin-bottom: 20px">Save</button>
  <div class="builder-container">
    <StartForm :msg="helloMsg" @send-data="handleFormData" :clear="clearing" />
    <component :is="comp" v-for="comp of compList" @send-data="handleFormData" />
    <button @click="isOpen = true">+</button>
    <Modal :open="isOpen" @close="isOpen = !isOpen">
      <button v-for="ftype in formsAvailable" @click="compList.push(ftype)">
        {{ ftype.__name }}
      </button>
    </Modal>
  </div>
</template>

<style scoped>
.builder-container {
  display: flex;
  flex-direction: row;
}
</style>
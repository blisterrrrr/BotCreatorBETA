<script setup lang="ts">
import { useNameStore } from '@/stores/name'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import StartForm from '@/components/Forms/StartForm.vue'
import { useTitle } from '@vueuse/core'
import { useBotStore } from '@/stores/botStore'
import Modal from '@/components/ModalWindow.vue'
import { formsAvailable } from '@/utils/FormsAvailable'

// Name store
const nameStore = useNameStore()
const { LSName } = storeToRefs(nameStore)
const helloMsg = computed(() => (`Welcome to ${LSName.value}`))

//BotJSON store
const botStore = useBotStore()
const { botCode } = storeToRefs(botStore)
const { saveAfterStart, clear, saveStartForm } = botStore

const isOpen = ref(false)
const compList = ref([])
const startForm = ref(null)
const logicForms = ref([])

useTitle(computed(() => `Creating ${LSName.value}`))

const save = () => {
  saveStartForm(startForm.value?.getFormData())
  botCode.value.children = []
  logicForms.value.forEach((el) => {
    console.log(el.getFormData())
    saveAfterStart(el.getFormData())
  })
  console.log(JSON.stringify(botCode.value))
}
</script>
<template>
  <h1>Bot Name: {{ LSName }}</h1>
  <button @click="save" style="margin-bottom: 20px">Save</button>
  <div class="builder-container">
    <StartForm :msg="helloMsg"
               ref="startForm"
               id="0"
    />
    <component :is="comp"
               v-for="(comp, index) of compList"
               :id="index + 1"
               :key="index"
               ref="logicForms"
    />
    <button @click="isOpen = true">+</button>
    <Modal :open="isOpen" @close="isOpen = !isOpen">
      <button v-for="(ftype, index) in formsAvailable"
              @click="compList.push(ftype); isOpen = !isOpen"
              :key="index"
      >
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
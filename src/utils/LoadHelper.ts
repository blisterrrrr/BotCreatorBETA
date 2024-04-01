import StartForm from '../components/Forms/StartForm.vue'
import type { Component } from 'vue'
import SendForm from '@/components/Forms/SendForm.vue'
import MessageForm from '@/components/Forms/MessageForm.vue'

const availableForms: {
  [k: string]: Component
} = {
  'start': StartForm,
  'send': SendForm,
  'answer': MessageForm
}

export const loadComponent = (compName: string) => {
  try {
    return availableForms[compName]
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}
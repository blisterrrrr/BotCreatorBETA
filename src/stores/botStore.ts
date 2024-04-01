import { defineStore } from 'pinia'
import type { FormDescription } from '@/utils/DescTypes'

export const useBotStore = defineStore('bot', {
  state(): { botCode: FormDescription | {} } {
      return {botCode: {}}
  },
  actions: {
    saveStartForm(data: FormDescription) {
      this.botCode = data
    },
    saveAfterStart(data: FormDescription) {
      if ('children' in this.botCode)
      this.botCode.children.push(data)
    },
    clear() {
      this.botCode = {}
    },
  }
})
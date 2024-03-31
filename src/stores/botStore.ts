import { defineStore } from 'pinia'

export const useBotStore = defineStore('bot', {
  state() {
      return {botCode: {}}
  },
  actions: {
    saveStartForm(data) {
      this.botCode = data
    },
    saveAfterStart(data) {
      this.botCode.children.push(data)
    },
    clear() {
      this.botCode = {}
    }
  }
})
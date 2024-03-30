import { defineStore } from 'pinia'

export const useBotStore = defineStore('bot', {
  state() {
      return {botCode: {}}
  },
  actions: {
    saveAfterStart(data) {
      if (data.type !== 'start') {
        console.log(this.botCode)
        this.botCode.children.push(data)
        return
      }
      this.botCode = data
    },
    clear() {
      this.botCode = {}
    }
  }
})
import { defineStore } from 'pinia'

export const useNameStore = defineStore('name', {
  state() {
    return { name: '' }
  },

  getters: {
    LSName() {
      return localStorage.getItem('name')
    }
  },

  actions: {
    setDefaultName() {
      this.name = 'MyBot'
    },
    getFromLS() {
      return localStorage.getItem('name')
    },
    saveToLS() {
      localStorage.setItem('name', this.name)
    }
  }
})

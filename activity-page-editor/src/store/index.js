import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    templates: [],
    activeTemplate: '',
    hoverTemplate: ''
  },
  mutations: {
    setTemplate (state, payload) {
      state.templates.push(payload)
      state.activeTemplate = payload.id
    },
    clearActiveTemplate (state) {
      state.activeTemplate = ''
    },
    toggleTempStatus (state, id) {
      state.activeTemplate = state.activeTemplate === id ? '' : id
    },
    setHoverTemplate (state, id) {
      state.hoverTemplate = id
    }
  },
  actions: {
  },
  modules: {
  }
})

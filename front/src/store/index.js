import { createStore } from 'vuex'
import api from '@/api/api.js'

export default createStore({
  state: {
    user: false
  },
  mutations: {
    setUser (state) {
      state.user = true
    }
  },
  actions: {
    login ({ commit }, credentials) {
      api.login(credentials).then(data => {
        const { success, user, message } = data
        if (!success) {
          // afficher le message contenu dans 'message'
          console.log(message)
          return
        }
        commit('setUser', user)
      })
    },
    register ({ commit }, credentials) {
      api.login(credentials).then(data => {
        const { success, user, message } = data
        if (!success) {
          // afficher le message contenu dans 'message'
          console.log(message)
          return
        }
        commit('setUser', user)
      })
    }
  },
  modules: {
  }
})

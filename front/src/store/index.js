import { createStore } from 'vuex'
import methods from './methods'

export default createStore({
  state: {
    user: false
  },
  mutations: {
    setUser (state) {
      state.user = true
    },
    resetUser (state) {
      state.user = false
    }
  },
  actions: {
    login ({commit}, credentials) {
      fetch(url, { headers, method: 'post', body: credentials })
        .then(res => res.json())
        .then(data => {
          commit('setUser')
        })
    },
    checkToken (actionObject) {
      const token = localStorage.getItem('token')
      fetch(url, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
        .then(res => res.json())
        .then(data => {
          actionObject.commit('setUser')
        })
    },
    logout (actionObject) {
      actionObject.commit('resetUser')
      localStorage.removeItem('token')
    }
  },
  modules: {
  }
})
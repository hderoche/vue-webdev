import api from '@/api/api.js'

export default {
  state: {
    data: undefined,
    isFetching: false
  },
  mutations: {
    setUser (state, user) {
      state.data = user
    },
    resetUser (state) {
      state.data = undefined
    }
  },
  actions: {
    login ({ commit }, credentials) {
      api.login(credentials).then(data => {
        const { success, user, token, message } = data
        if (!success) {
          // afficher le message contenu dans 'message'
          console.error(message)
          return
        }
        localStorage.setItem('token', token)
        commit('setUser', user)
      })
    },
    checkToken ({ commit }) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      api.checkToken(token)
        .then(data => {
          const { success, message, user } = data
          if (!success) {
            console.warn(message)
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
    },
    logout ({ commit }) {
      localStorage.removeItem('token')
      commit('resetUser')
    }
  },
  getters: {
    isLoggedIn: state => !!state.data
  }
}

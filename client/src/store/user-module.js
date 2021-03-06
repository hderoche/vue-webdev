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
        return false
      }
      api.checkToken(token)
        .then(data => {
          const { success, message, user } = data
          if (!success) {
            console.warn(message)
            return false
          }
          commit('setUser', user)
          return true
        })
    },
    register ({ commit }, credentials) {
      api.register(credentials).then(data => {
        const { success, message } = data
        if (!success) {
          // afficher le message contenu dans 'message'
          console.log(message)
          return
        }
        alert('Successfully registered !!')
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

import apiRoutes from './api-routes'
import jsonClient from './api-client'

export default {
  // api/v1/auth/token
  login (credentials) {
    return jsonClient.post(apiRoutes.login, { body: credentials })
  },
  // api/v1/auth/user
  register (payload) {
    console.log('sending the register request')
    return jsonClient.post(apiRoutes.register, { body: payload })
  },
  // api/v1/auth/user
  checkToken (token) {
    return jsonClient.get(apiRoutes.checkToken, { headers: { Authorization: 'Bearer ' + token } })
  },
  logout () {
    localStorage.removeItem('token')
  }
}

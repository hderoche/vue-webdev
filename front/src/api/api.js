import apiRoutes from './api-routes'
import jsonClient from './api-client'

export default {
  login (credentials) {
    return jsonClient.post(apiRoutes.login, { body: credentials })
  },
  register (credentials) {
    return jsonClient.post(apiRoutes.register, { body: credentials })
  }
}

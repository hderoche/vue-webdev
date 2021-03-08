const apiPaths = {
    loginUrl: '/api/auth/signin',
    checkToken: '/user'
  }
  
  const jsonClient = (url, options) => fetch(
    url,
    {
      ...options,
      headers: {
        ...options.headers,
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
const api = {
    login (credentials) {
      return jsonClient(
        apiPaths.loginUrl,
        {
          method: 'post',
          body: credentials
        }
      )
      .then(({ success, token }) => {
        if (success) {
          localStorage.setItem('token', token)
          window.alert('Successfully logged in')
          this.$router.push({ path: '/' })
        }
      })
    },
    checkToken () {
      const token = localStorage.getItem('token')
      return jsonClient(apiPaths.checkTokenUrl, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
        .then(data => data.user)
    }
}
export default {
  post (url, options) {
    return fetch(url, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        ...options.headers
      },
      body: JSON.stringify(options.body)
    }).then(res => res.json())
  },
  get (url, options) {
    return fetch(url, { method: 'get', headers: { ...options.headers } })
      .then(res => res.json())
  }
}

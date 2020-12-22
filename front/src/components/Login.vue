<template>
  <div>
      <h1>Se connecter</h1>
      <form @submit.prevent="login">
          <p>
              <label for="username">Username</label>
              <input type="text" placeholder="username" id="username" v-model="username" required>
          </p>
          <p>
              <label for="password">Password</label>
              <input type="text" placeholder="password" id="password" v-model="password" required>
          </p>
          <button type="submit">Envoyer</button>
      </form>
  </div>
  <div>
      <button @click.prevent="logout">Déconnexion</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: undefined,
      password: undefined
    }
  },
  methods: {
    login () {
      const user = this.username
      const password = this.password
      const payload = { user, password }
      fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(({ success, token }) => {
          if (success) {
            localStorage.setItem('token', token)
            window.alert('Successfully logged in')
            this.$router.push({ path: '/' })
          }
        })
        .catch(error => { this.error = error })
    },
    logout () {
      localStorage.removeItem('token')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>

input {
    padding: 1% 2%;
    border-radius: 8px;
    font-size:medium;
}
input:focus {
    outline:0;
}
label {
    margin-right: 1rem;
}
</style>

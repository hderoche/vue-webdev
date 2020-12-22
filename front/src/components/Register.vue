<template>
  <div>
      <h1>S'inscrire</h1>
      <form @submit.prevent="register">
          <p>
              <label for="username">Username</label>
              <input type="text" placeholder="Ex. me" id="username" v-model="username" required>
          </p>
          <p>
              <label for="password">Password</label>
              <input type="password" placeholder="password" id="password" v-model="password" required>
          </p>
          <button type="submit">Envoyer</button>
      </form>
  </div>
  <div>
      <p>
        Username :
        {{ username }}
      </p>
      <p>
        Password :
        {{ password }}
      </p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      username: undefined,
      password: undefined
    }
  },
  methods: {
    register () {
      const user = this.username
      const password = this.password
      const payload = { user, password }
      console.log(payload)
      fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        .then(({ success, message }) => {
          if (success) {
            window.alert(message)
            this.$router.push({ path: 'sign' })
          } else {
            window.alert(message)
          }
        })
        .catch(error => { this.error = error })
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

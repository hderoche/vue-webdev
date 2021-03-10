<template>
  <div class="onglet">
      <h1>Connexion</h1>
      <div class="deco" v-if="this.$store.state.user !== undefined">
        <button @click.prevent="tryLogout">Déconnexion</button>
      </div>
      <div v-else>
        <form @submit.prevent="tryLogin">
          <p>
              <label for="username">Username</label>
              <br>
              <input type="text" placeholder="username" id="username" v-model="username" required>
          </p>
          <p>
              <label for="password">Password</label>
              <br>
              <input type="password" placeholder="password" id="password" v-model="password" required>
          </p>
          <button type="submit" value="Se connecter"> se connecter</button>
        </form>
      </div>
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
    tryLogin () {
      const user = this.username
      const password = this.password
      const payload = { user, password }
      this.$store.dispatch('login', payload)
      this.username = ''
      this.password = ''
    },
    tryLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>

h1 {
  color:#6C63FF;
  margin-bottom: 1em;
}
p {
  margin-bottom: 1em;
}
input {
  padding: 1% 2% 1% 1%;
  border-radius: 8px;
  font-size:medium;
  margin-top: 8px;
}
input:focus {
  outline:0;
}
label {
  color: #6C63FF;
}
.onglet {
  width: 60%;
  height: 450px;
  margin-left: 20%;
  margin-top: 3em;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 8px;
  background:rgba(0, 0, 0, 0.9);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
button {
  margin-top: 0.5em;
}
button:hover{
  color: white;
  background-color:darkblue;
}
.deco {
  margin-top: 20px;
}
</style>

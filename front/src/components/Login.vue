<template>
  <div class="onglet">
      <h1>Connexion</h1>
      <div class="deco" v-if="isLoggedIn">
        <button @click.prevent="tryLogout">Déconnexion</button>
      </div>
      <div v-else>
        <form @submit.prevent="tryLogin">
          <p>
              <label for="login">Login</label>
              <br>
              <input type="text" placeholder="login" id="login" v-model="login" required>
          </p>
          <p>
              <label for="password">Password</label>
              <br>
              <input type="password" placeholder="password" id="password" v-model="password" required>
          </p>
          <button type="submit" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" value="Se connecter"> se connecter</button>
        </form>
      </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      login: undefined,
      password: undefined,
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    }),
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    tryLogin () {
      const login = this.login
      const password = this.password
      const payload = { login, password }
      this.$store.dispatch('login', payload)
      this.login = ''
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

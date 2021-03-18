<template>
  <div>
    <div class="onglet">
        <h1>Inscription</h1>
        <form @submit.prevent="tryRegister">
            <p>
                <label for="login">Login</label>
                <br>
                <input type="text" placeholder="Ex. me" id="login" v-model="login" required>
            </p>
            <p>
                <label for="password">Password</label>
                <br>
                <input type="password" placeholder="password" id="password" v-model="password" required>
            </p>
            <p>
                <label for="firstname">Prénom</label>
                <br>
                <input type="text" placeholder="Jean..." id="firstname" v-model="firstname" required>
            </p>
            <p>
                <label for="lastname">Nom</label>
                <br>
                <input type="text" placeholder="Dupont..." id="lastname" v-model="lastname" required>
            </p>
            <p>
                <label for="email">Email</label>
                <br>
                <input type="text" placeholder="jean.dupont@email.com" id="email" v-model="email" required>
            </p>
            <button type="submit">Envoyer</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: undefined,
      password: undefined,
      firstname: undefined,
      lastname: undefined,
      email: undefined
    }
  },
  methods: {
    tryRegister () {
      const login = this.login
      const password = this.password
      const lastname = this.lastname
      const firstname = this.firstname
      const email = this.email

      const payload = { login, password, firstname, lastname, email }
      console.log(payload)
      this.$store.dispatch('register', payload)
      this.login = ''
      this.password = ''
      this.lastname = ''
      this.firstname = ''
      this.email = ''
      this.$router.push('/login')
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
  width: 50%;
  height: auto;
  margin-left: 25%;
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
</style>

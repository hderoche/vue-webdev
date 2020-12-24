<template>
  <div>
    <div class="onglet">
        <h1>Inscription</h1>
        <form @submit.prevent="register">
            <p>
                <label for="username">Username</label>
                <br>
                <input type="text" placeholder="Ex. me" id="username" v-model="username" required>
            </p>
            <p>
                <label for="password">Password</label>
                <br>
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
            this.$router.push({ path: '/' })
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
  height: 350px;
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

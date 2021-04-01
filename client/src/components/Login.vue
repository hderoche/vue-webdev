<template>
  <div >
      <!-- <h1>Connexion</h1>
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
      </div> -->

<div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
            <div class="py-8 px-8 rounded-xl">
                <h1 class="font-medium text-2xl mt-3 text-center">Se connecter</h1>
                <form  @submit.prevent="tryLogin" class="mt-6">
                    <div class="my-5 text-sm">
                        <label for="username" class="block text-black">Login</label>
                        <input type="text" placeholder="login" id="login" v-model="login" required autofocus class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
                    </div>
                    <div class="my-5 text-sm">
                        <label for="password" class="block text-black">Password</label>
                        <input type="password" placeholder="Password" id="password" v-model="password" required class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
                        <div class="flex justify-end mt-2 text-xs text-gray-600">
                           <a href="../../pages/auth/forget_password.html hover:text-black">Mot de passe oublié ?</a>
                        </div>
                    </div>

                    <button type="submit" class="block text-center text-white p-3 duration-300 rounded-sm bg-gray-800 hover:bg-black w-full">Login</button>
                </form>

                 <div class="flex md:justify-between justify-center items-center mt-10">
                    <div style="height: 1px;" class="bg-gray-300 md:block hidden w-4/12"></div>
                      <p class="md:mx-2 text-sm font-light text-gray-400"> Autres moyens de connection </p>
                    <div style="height: 1px;" class="bg-gray-300 md:block hidden w-4/12"></div>
                </div>

                <div class="grid md:grid-cols-2 gap-2 mt-7">
                    <div>
                        <button class="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
                    </div>
                    <div>
                        <button class="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">Twitter</button>
                    </div>
                </div>
                <p class="mt-12 text-xs text-center font-light text-gray-400"> Vous n'avez pas de compte ? <router-link to="/register" class="text-black font-medium"> Enregistrez vous ! </router-link>  </p>
            </div>
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
      password: undefined
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

</style>

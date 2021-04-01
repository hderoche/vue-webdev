<template>
  <div>
    <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md" ref="container">
            <div class="py-8 px-8 rounded-xl">
                <h1 class="font-medium text-2xl mt-3 text-center">Inscription</h1>
                <form  @submit.prevent="tryRegister" class="mt-6">
                    <div class="my-5 text-sm">
                        <label for="username" class="block text-black">Login</label>
                        <input type="text" placeholder="login" id="login" v-model="login" required autofocus class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
                    </div>
                    <div class="my-5 text-sm">
                        <label for="password" class="block text-black">Password</label>
                        <input type="password" placeholder="Password" id="password" v-model="password" required class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
                    </div>
                    <div class="my-5 text-sm">
                        <label for="firstname" class="block text-black">Prénom</label>
                        <input type="text" placeholder="Prénom" id="firstname" v-model="firstname" required class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
                    </div>
                    <div class="my-5 text-sm">
                        <label for="lastname" class="block text-black">Nom</label>
                        <input type="text" placeholder="Nom" id="lastname" v-model="lastname" required class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
                    </div>
                    <div class="my-5 text-sm">
                        <label for="email" class="block text-black">Email</label>
                        <input type="email" placeholder="Email" id="email" v-model="email" required class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" />
                    </div>

                    <button type="submit" class="block text-center text-white p-3 duration-300 rounded-sm bg-indigo-600 hover:bg-indigo-700 w-full">Login</button>
                    <button type="button" @click="showAlert" class="block text-center text-white p-3 duration-300 rounded-sm bg-gray-800 hover:bg-black w-full">Alert</button>

                </form>

                 <div class="flex md:justify-between justify-center items-center mt-10">
                    <div style="height: 1px;" class="bg-gray-300 md:block hidden w-4/12"></div>
                      <p class="md:mx-2 text-sm font-light text-gray-400"> Vous avez déjà un compte ? </p>
                    <div style="height: 1px;" class="bg-gray-300 md:block hidden w-4/12"></div>
                </div>
                <p class="mt-12 text-xs text-center font-light text-gray-400"> <router-link to="/login" class="text-black font-medium"> Connectez vous ! </router-link>  </p>

            </div>
        </div>
        <snack-bar
          v-if="hasMessage"
          @close="hideAlert"
        >
          Ici le message
        </snack-bar>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue'

export default {
  name: 'Register',

  components: {
    SnackBar: Alert
  },

  data () {
    return {
      login: undefined,
      password: undefined,
      firstname: undefined,
      lastname: undefined,
      email: undefined,
      hasMessage: false
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
    },

    showAlert () {
      this.hasMessage = true
    },

    hideAlert () {
      this.hasMessage = false
    }
  }
}
</script>

<style scoped>

</style>

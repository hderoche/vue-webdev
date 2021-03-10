<template>
  <div id="app">
       <div>
          <router-link class="nav-link menu-item" to="/">Home</router-link> |
          <router-link class="nav-link menu-item" to="/crypto">Crypto-monnaies</router-link> |
          <router-link class="nav-link menu-item" to="/erc20">ETH Explorer</router-link> |
          <router-link class="nav-link menu-item" to="/infos">Infos</router-link> |
          <router-link class="nav-link menu-item" to="/about">À propos</router-link> |
          <router-link class="nav-link menu-item" to='/login' v-if="!user">Se connecter</router-link> |
          <router-link class="nav-link menu-item" to="" v-if="user"><button @click.prevent="tryLogout">Logout</button></router-link>
       </div>
    <body>
      <router-view/>
    </body>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app',
  computed: mapState(['user']),
  mounted () {
    this.$store.dispatch('checkToken')
  },
  methods: {
    tryLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
  margin: auto;
}
header {
  width: 100vw;
}
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  text-decoration: none;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #6C63FF;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
 }

</style>

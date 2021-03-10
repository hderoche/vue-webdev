<template>
  <nav>
    <roudiv>
         <ter-link class="nav-link menu-item" to="/">Home</router-link>
             <router-link class="nav-link menu-item" to="/crypto">Crypto-monnaies</router-link>
             <router-link class="nav-link menu-item" to="/erc20">ETH Explorer</router-link>
             <router-link class="nav-link menu-item" to="/infos">Infos</router-link>
             <router-link class="nav-link menu-item" to="/about">À propos</router-link>
             <router-link class="nav-link menu-item" to='/login' v-if="!user"></router-link>
             <router-link class="nav-link menu-item" v-if="user"></router-link>
       </div>
    <!-- Passer la liste des liens au component : Dropdown -->
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'navbar',
  computed: mapState(['user']),
  methods: {
    tryLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
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

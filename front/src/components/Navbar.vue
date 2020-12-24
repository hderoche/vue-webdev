<template>
  <nav>
    <router-link class="nav-link menu-item" to="/">Home</router-link>
    <router-link class="nav-link menu-item" to="/crypto">Crypto-monnaies</router-link>
    <router-link class="nav-link menu-item" to="/erc20">ETH Explorer</router-link>
    <router-link class="nav-link menu-item" to="/infos">Infos</router-link>
    <router-link class="nav-link menu-item" to="/about">À propos</router-link>
    <!-- Passer la liste des liens au component : Dropdown -->
    <Dropdown title="Rejoindre" :items="services" />
  </nav>
</template>

<script>
import Dropdown from './Dropdown'

export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data () {
    return {
      connected: true,
      services: [
        {
          title: 'S\'inscrire',
          link: 'register'
        },
        {
          title: 'Se connecter',
          link: 'login'
        }
      ]
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

<template>
  <div id="app">
    <header>
      <Navbar/>
    </header>
    <body>
      <router-view/>
    </body>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {
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
  background-color: #222;
  padding: 15px;
}

</style>

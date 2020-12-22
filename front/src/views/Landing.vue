<template>
  <div class="main-container">
      <Landing/>
      <Footer/>
  </div>
</template>

<script>
import Landing from '@/components/Landing.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'LandingView',
  components: {
    Landing,
    Footer
  }
}
</script>

<style>
.main-container {
 min-height: 100vh; /* will cover the 100% of viewport */
 overflow: hidden;
 display: block;
 position: relative;
 padding-bottom: 100px; /* height of your footer */
}
</style>

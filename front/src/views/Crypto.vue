<template>
  <div class="main-container">
      <CryptoData/>
      <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import CryptoData from '@/components/CryptoData.vue'

export default {
  name: 'CryptoView',
  components: {
    CryptoData,
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

<template>
  <div class="container">
    <div class="sameline">
      <div class="left">
        <img src="@/assets/Vue.js_Logo.svg" alt="" class="img">
        <img src="@/assets/Node.js_logo.svg" alt="" class="img">
      </div>
      <div class="right">
        <h2 style="margin-left: 1rem">
          Powered by
        </h2>
        <p class="centertext">
          <strong>
            VueJS
            <br>
            NodeJS
          </strong>
        </p>
      </div>
    </div>
    <p>
      <i>Using QuantifyCrypto and Etherscan APIs</i>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
}
.centertext {
  margin-left: 4rem;
}

.left {
  display: block;
  width: 50%;
  height: 200px;
}

.right {
  width: 50%;
  text-align: left;
}

.sameline {
  display: inline-flex;
  align-items: center;
  margin: 2rem auto;
}

.img {
  height: 50%;
  width: 100%;
}
</style>

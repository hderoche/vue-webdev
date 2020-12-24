<template>
    <div>
      <h1 style="color:#6C63FF; margin-top: 0.5em;">Dernier bloc miné sur la blockchain Ethereum</h1>
      <div class="block" v-if="done">
            <h2 style="margin-top: 0.7em;">Bloc ETH # {{amount.result.blockNumber}}</h2>
            <h3 style="margin-bottom : 5px"><img src="https://img.icons8.com/fluent-systems-regular/24/000000/golden-fever.png"/>
  Miné à {{blockdate}}</h3>
          <img class="iconimg" src="https://img.icons8.com/pastel-glyph/30/000000/dollar-coin.png"/>
          <p>Récompense du bloc :<br>{{(amount.result.blockReward / 10**18).toFixed(5)}} ETH</p>
          <img class="iconimg" src="https://img.icons8.com/dotty/30/000000/contact-card.png"/>
          <p class="css-overflow">Adresse ERC-20 du mineur : <br>{{amount.result.blockMiner}}</p>
      </div>
      <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'Account',
  data () {
    return {
      done: false,
      blockdate: '',
      amount: []
    }
  },
  components: {
    Footer
  },
  mounted () {
    fetch('/api/crypto/eth', { method: 'GET' }).then(data => data.json())
      .then(response => {
        if (response.success) {
          this.amount = response.data
          console.log(response.data.result.timeStamp)
          // this.blockdate = (new Date(+response.data.result.timeStamp * 1000)).getHours() + ':' + (new Date(+response.data.result.timeStamp * 1000)).getMinutes() + ':' + (new Date(+response.data.result.timeStamp * 1000)).getSeconds()
          this.blockdate = (new Date(+response.data.result.timeStamp * 1000)).toString().split(' ')[4]
          this.done = true
        } else {
          window.alert(response.data)
        }
      })
  }
}
</script>

<style scoped>
.block {
  width: 30%;
  height: 17rem;
  border: 1px solid rgba(255, 255, 240, 1);
  border-radius: 8px;
  background: rgba(255, 255, 245, 0.9);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  margin: auto;
  z-index: 0;
}

h1{
  margin-top : 30px;
  margin-bottom : 30px;
}

.iconimg {
  margin-top : 15px;
}

.css-overflow {
  word-wrap: break-word;
}
</style>

<template>
    <h1>Dernier bloc miné sur la blockchain Ethereum</h1>
    <div class="block" v-if="done">
          <h2>Bloc ETH # {{amount.result.blockNumber}}</h2>
          <h3 style="margin-bottom : 5px"><img src="https://img.icons8.com/fluent-systems-regular/24/000000/golden-fever.png"/>
Miné à {{blockdate}}</h3>
        <img class="iconimg" src="https://img.icons8.com/pastel-glyph/30/000000/dollar-coin.png"/>
        <p>Récompense du bloc :<br>{{(amount.result.blockReward / 10**18).toFixed(5)}} ETH</p>
        <img class="iconimg" src="https://img.icons8.com/dotty/30/000000/contact-card.png"/>
        <p>Adresse ERC-20 du mineur : <br>{{amount.result.blockMiner}}</p>
    </div>
    <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'Account',
  data () {
    return {
      done: false,
      blockdate: '',
      amount: [],
      erc: [],
      account: '',
      balance: '',
      token: '1S3BH8CD2C7KRTA8AE2UENHW8AYFCG824P',
      txhash: []
    }
  },
  components: {
    Footer
  },
  methods: {
    search: function () {
      console.log(this.account)
      fetch('https://api.etherscan.io/api?module=account&action=balance&address=' + '0x686ec32C61aE7d3fF16e26403EBea633274cDFB9' + '&tag=latest&apikey=' + this.token)
        .then(data => data.json())
        .then(response => {
          console.log(response)
          console.log(this.account)
          this.txhash = response
          this.balance = response.result / 10 ** 18
        })
    }
  },
  mounted () {
    const time = Math.floor(new Date().getTime() / 1000)
    fetch('https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=' + time + '&closest=before&apikey=' + this.token)
      .then(data => data.json())
      .then(response => {
        fetch('https://api.etherscan.io/api?module=block&action=getblockreward&blockno=' + response.result + '&apikey=' + this.token)
          .then(data => data.json())
          .then(response => {
            console.log(response)
            this.amount = response
            this.blockdate = (new Date(+response.result.timeStamp)).getHours() + ':' + (new Date(+response.result.timeStamp)).getMinutes() + ':' + (new Date(+response.result.timeStamp)).getSeconds()
            this.done = true
          })
      })

    fetch('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x57d90b64a1a57749b0f932f1a3395792e12e7055&apikey=' + this.token)
      .then(data => data.json())
      .then(response => {
        console.log(response)
        this.erc = response
      })
  }
}
</script>

<style scoped>
.block {
  width: 30%;
  height: 17rem;
  border-radius: 8px;
  margin: auto;
  border: 3px solid black;
  z-index: 0;
}

h1{
  margin-top : 30px;
  margin-bottom : 30px;
}

.iconimg {
  margin-top : 15px;
}
</style>

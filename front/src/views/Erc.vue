<template>
    {{amount}}
    <div class="block" v-if="done">
      <div class="blockInfos">
        <ul>
          <li>ETH Block # {{amount.result.blockNumber}}</li>
          <li>Today : {{blockdate}}</li>
        </ul>
      </div>
      <div class="blockCore">
        <ul>
          <li>Block Reward : {{(amount.result.blockReward / 10**18).toFixed(5)}} ETH</li>
          <li>Miner Address : {{amount.result.blockMiner}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
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
  width: 25%;
  height: 20rem;
  border-radius: 8px;
  margin: auto;
  border: 3px solid black;
  z-index: 0;
}
.blockInfos {
  border: 3px solid black;
  z-index: 1;
  display: inline;
  margin-top: 3rem;
  width: 100%;
}
.blockCore {
  border: 3px solid black;
  width: 100%;

}

ul li {
  text-decoration: none;
  list-style-type: none;
}
</style>

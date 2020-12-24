<template>
  <div>
    <router-link to="/crypto">
    <button style="margin: 1rem auto 1rem 3rem">Retour</button>
    </router-link>
    <div v-if="done">
      <h2>
        Rank : {{infoTable.rank}}
        <br>
        {{ $route.params.symbol }}
        <br>
        Current price : {{infoTable.price_usd}} USD
      </h2>
      <div class="tables">
        <table>
          <tr>
            <th>RSI</th>
            <th>Indicator</th>
          </tr>
          <tr v-for="elt in rsi" :key="elt" >
            <th>{{elt.name}}</th>
            <th v-bind:class="{green:elt.value>= 60,red:elt.value <= 40, neutral: elt.value > 40 && elt.value <60}">{{elt.value}}</th>
          </tr>
        </table>
        <table>
          <tr>
            <th>Trends</th>
            <th>Indicator</th>
          </tr>
          <tr v-for="elt in trend" :key="elt" >
            <th>{{elt.name}}</th>
            <th v-bind:class="{green:elt.value>= 60,red:elt.value <= 40, neutral: elt.value > 40 && elt.value <60}">{{elt.value}} %</th>
          </tr>
        </table>
        <table>
          <tr>
            <th>ATR</th>
            <th>Indicator</th>
          </tr>
          <tr v-for="elt in atr" :key="elt" >
            <th>{{elt.name}}</th>
            <th>{{elt.value}}</th>
          </tr>
        </table>
      </div>
        <div class="tables">
          <table>
            <tr>
              <th>Bollinger Band Lower</th>
              <th>Indicator</th>
              <th>Percentage</th>
            </tr>
            <tr v-for="elt in bbl" :key="elt" >
              <th>{{elt.name}}</th>
              <th>{{elt.value}}</th>
              <th v-bind:class="{green:elt.percentage >= -2,red:elt.percentage <= -5, neutral: elt.percentage < -2 && elt.percentage > -5}">{{elt.percentage}} %</th>
            </tr>
          </table>
          <table>
            <tr>
              <th>Bollinger Band Upper</th>
              <th>Indicator</th>
              <th>Percentage</th>
            </tr>
            <tr v-for="elt in bbu" :key="elt" >
              <th>{{elt.name}}</th>
              <th>{{elt.value}}</th>
              <th v-bind:class="{green:elt.percentage >= 5,red:elt.percentage <= 2, neutral: elt.percentage > 2 && elt.percentage < 5}">{{elt.percentage}} %</th>
            </tr>
          </table>
        </div>
          <div class="tables">
            <table>
              <tr>
                <th>MACD</th>
                <th>Indicator</th>
              </tr>
              <tr v-for="elt in macd" :key="elt" >
                <th>{{elt.name}}</th>
                <th>{{elt.value}}</th>
              </tr>
            </table>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      infoTable: [],
      rsi: [],
      trend: [],
      macd: [],
      atr: [],
      bbl: [],
      bbu: [],
      keys: [],
      error: '',
      coin: this.$route.params.symbol,
      token: '',
      done: false
    }
  },
  mounted () {
    this.token = localStorage.getItem('token')
    if (this.token !== null) {
      // Fetch the data of the coin
      fetch('/api/crypto/coin/' + this.coin, { method: 'GET', headers: { Authorization: 'Bearer ' + this.token } })
        .then(data => data.json())
        .then(result => {
          console.log('sending coin request')
          console.log('result', result)
          console.log('result', result.indicators)
          if (result.success) {
            this.infoTable = result.indicators
            this.keys = Object.keys(this.infoTable)
            this.rsi = this.keys.filter(elt => elt.includes('rsi')).map(elt => { return { name: elt, value: this.infoTable[elt] } })
            this.trend = this.keys.filter(elt => elt.includes('trend')).map(elt => { return { name: elt, value: this.infoTable[elt] } })
            this.macd = this.keys.filter(elt => elt.includes('macd')).map(elt => { return { name: elt, value: this.infoTable[elt] } })
            this.atr = this.keys.filter(elt => elt.includes('atr')).map(elt => { return { name: elt, value: this.infoTable[elt] } })
            this.bbl = this.keys.filter(elt => elt.includes('bollinger_bands_lower')).map(elt => {
              const currentPrice = this.infoTable.price_usd
              const percentage = (((this.infoTable[elt] - currentPrice) / currentPrice) * 100).toFixed(2)
              return { name: elt, value: this.infoTable[elt], percentage }
            })
            this.bbu = this.keys.filter(elt => elt.includes('bollinger_bands_upper')).map(elt => {
              const currentPrice = this.infoTable.price_usd
              const percentage = (((this.infoTable[elt] - currentPrice) / currentPrice) * 100).toFixed(2)
              return { name: elt, value: this.infoTable[elt], percentage }
            })
          }
          this.done = true
        })
        // eslint-disable-next-line no-return-assign
        .catch((error) => this.error = error)
    } else {
      this.$router.push({ path: 'login' })
      window.alert('You are not signed in')
    }
  },
  methods: {
  }
}
</script>

<style>
table {
  text-align: center;
  margin: 1rem auto;
  border: 1px solid rgba(255, 255, 240, 1);
  border-radius: 8px;
  background: rgba(255, 255, 245, 0.9);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-collapse: collapse;
  height: 200px;
}

.tables {
  display: inline-flex;
  width: 80%;
  overflow:inherit;
}

.green {
  background-color: lightgreen;
}
.red {
  background-color: lightcoral;
}
.neutral {
  background-color: lightsalmon;
}
</style>

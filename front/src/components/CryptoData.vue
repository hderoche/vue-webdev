<template>
  <div v-if="etherPrice">
      <h1>List of the prices</h1>
      <table style="margin: 2rem auto; border-collapse: collapse">
            <thead>
                <th>Rank</th>
                <th>Symbol</th>
                <th>Price</th>
                <th></th>
                <th>More</th>
            </thead>
            <tr v-for="elt in top10" :key="elt" class="row">
                <th >{{elt.rank}}</th>
                <th>{{elt.coin_symbol}}</th>
                <th>{{elt.coin_price}}</th>
                <th>{{elt.currency}}</th>
              <router-link :to="{name: 'Details', params: { symbol: elt.coin_symbol }}" class="deco">
                <th class="btn-more">Indicator</th>
              </router-link>
            </tr>
        </table>
        <button @click="loadMore()" style="text-align: center;" v-if="!clicked">Load more ...</button>

  </div>
</template>

<script>
export default {
  name: 'Data',
  data () {
    return {
      etherPrice: {},
      error: '',
      currencies: [],
      top10: [],
      clicked: false
    }
  },
  methods: {
    loadMore: function () {
      this.top10 = this.currencies
      this.clicked = true
    }
  },

  mounted () {
    // Fetch de currencies
    if (localStorage.getItem('token')) {
      const token = 'Bearer ' + localStorage.getItem('token')
      fetch('/api/crypto/list',
        {
          method: 'GET',
          headers: {
            Authorization: token
          }
        })
        .then(data => data.json())
        .then(res => {
          console.log(res)
          if (res.success) {
            this.currencies = res.data
            this.top10 = this.currencies.filter(cur => cur.rank <= 10)
            console.log(this.top10)
          } else {
            window.alert(res.data.message)
            this.$router.push({ path: 'login' })
          }
        })
    } else {
      window.alert('You are not identified')
      this.$router.push({ path: 'login' })
    }
  }
}
</script>

<style>
.row:hover {
  background-color: lightblue;
  cursor: pointer;
}

tr {
  padding: 10px auto;
}

.btn-more {
  text-decoration: none;
  border-radius: 4px;
  background-color: lightseagreen;
}
.deco, .deco:hover, .deco:visited {
  text-decoration: inherit;
  color: inherit;
}
</style>

<template>
  <div v-if="etherPrice">
      <h1 class="xl:text-5xl mt-10 pt-16 xl:pt-0 text-3xl text-purple-500 text-center font-extrabold mb-4">List of the prices</h1>
      <br>
      <p>Click on <strong>indicators</strong> to have more information about the cryptocurrency</p>
      <table class="shadow-lg bg-white">
            <thead>
                <th class="bg-purple-400 border text-left px-8 py-4">Rank</th>
                <th class="bg-purple-400 border text-left px-8 py-4">Symbol</th>
                <th class="bg-purple-400 border text-left px-8 py-4">Price</th>
                <th class="bg-purple-400 border text-left px-8 py-4">Currency</th>
                <th class="bg-purple-400 border text-left px-8 py-4">More</th>
            </thead>
            <tr v-for="elt in top10" :key="elt" class="row">
                <td class="border px-8 py-4">{{elt.rank}}</td>
                <td class="border px-8 py-4">{{elt.coin_symbol}}</td>
                <td class="border px-8 py-4">{{elt.coin_price}}</td>
                <td class="border px-8 py-4">{{elt.currency}}</td>
              <router-link :to="{name: 'Details', params: { symbol: elt.coin_symbol }}" class="row deco">
                <td class="bg-purple-500 hover:bg-purple-600 text-white border px-8 py-4 rounded">Indicator</td>
              </router-link>
            </tr>
        </table>
        <button @click="loadMore()" class="mt-5 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded" v-if="!clicked">
          Load more ...
          </button>

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
    console.log('sending request')
    // Fetch de currencies
    if (localStorage.getItem('token')) {
      const token = 'Bearer ' + localStorage.getItem('token')
      fetch('/api/v1/crypto/list',
        {
          method: 'GET',
          headers: {
            Authorization: token
          }
        })
        .then(data => {
          console.log('inside response')
          console.log(data)
          return data.json()
        })
        .then(res => {
          console.log(res)
          if (res.success) {
            this.currencies = res.data
            this.top10 = this.currencies.filter(cur => cur.rank <= 10)
            console.log(this.top10)
          } else if (res.success === false) {
            fetch('/api/v1/crypto/local').then(data => data.json())
              .then(result => {
                if (result.success) {
                  this.currencies = result.data
                  this.top10 = this.currencies.filter(cur => cur.rank <= 10)
                } else if (result.success) {
                  window.alert(result.message)
                }
              })
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

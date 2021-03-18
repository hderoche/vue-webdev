<template>
    <div>
        <div class="bg-gray-50">
          <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span class="block">Prêt à investir ?</span>
              <span class="block text-indigo-600">Commencer l'aventure dans les cryptos</span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div class="inline-flex rounded-md shadow">
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  S'inscrire
                </a>
              </div>
              <div class="ml-3 inline-flex rounded-md shadow">
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style="display: inline-block">
            <h1 class="titre" >Monitorer les transactions des tokens ERC-20</h1>
            <img src="@/assets/undraw_crypto_portfolio.svg" alt="" style="width: 60%;"><br>
            <button @click="toinfos()">En savoir plus</button>
        </div>
        <div style="width: 80%; margin: 0 auto; display: table;">
            <div style="display: inline-flex; margin: auto;">
                <img src="@/assets/undraw_ethereum.svg" alt="" style="margin: 0 2rem 0 0; width: 50%">
                <p class="paragraph">
                        En apprendre davantage sur l'écosystème blockchain
                </p>
            </div>
            <div style="display: inline-flex; margin: auto;">
                <p class="paragraph">
                    Repérer les cryptos qui s'envolent
                </p>
                <img src="@/assets/undraw_nakamoto.svg" alt="" style="margin:0 2rem; width: 50%">
            </div>
        </div>
        <h3 class="titre">Rejoignez nous!</h3>
    </div>
</template>

<script>
export default {
  methods: {
    toinfos () {
      this.$router.push({ path: 'infos' })
    }
  }
}

</script>

<style>
.paragraph {
    margin: auto;
    width: 50%;
    text-align: center;
    vertical-align: middle;
    font-weight: 200;
    font-size: max(2em, 3vw);
}
.titre {
    margin: auto;
    margin-top: 2rem;
    width: 50%;
    text-align: center;
    vertical-align: middle;
    font-weight: 600;
    font-size: max(2em, 3vw);
}

button {
    padding: 1rem 2rem;
    background-color: #6C63FF;
    text-decoration: none;
    border-style: none;
    border-radius: 8px;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
    cursor: pointer;
}
span.ripple {
  position: absolute; /* The absolute position we mentioned earlier */
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms linear;
  background-color: rgba(255, 255, 255, 0.7);
}
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

button:focus {outline:0;}

</style>

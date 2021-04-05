<template>
  <div class="main-container ">
    <Banner/>
    <div class="container mx-auto pt-16">
                    <div class="mb-10">
                        <h1 class="xl:text-5xl pt-4 xl:pt-0 text-3xl text-gray-800 text-center font-extrabold mb-4">Derniers Articles</h1>
                        <p class="text-xl text-gray-600 text-center xl:w-3/5 mx-auto w-11/12">
                        </p>
                    </div>
                    <div class="lg:flex md:flex xl:justify-around sm:flex flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        <div class="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
                          <router-link to="/minage">
                            <div class="shadow h-64 rounded z-10">
                                <img src="https://cdn.tuk.dev/assets/photo-1573451444472-7b0b275ab824.jfif" alt="" class="h-full w-full object-cover overflow-hidden rounded" />
                            </div>
                            <div class="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                                <p class="uppercase text-sm text-indigo-700 text-center pb-3">Minage</p>
                                <p class="text-lg text-gray-800 text-center pb-3">Comment fonctionne le minage ?</p>
                                <p class="text-sm text-gray-800 text-center">
                                    21 Mars 2021 by <a href="javascript:void(0)"><span class="text-indigo-700 cursor-pointer">Silene Cox</span></a>
                                </p>
                            </div>
                          </router-link>
                        </div>
                        <div class="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
                            <router-link to="/minage">
                              <div class="shadow h-64 rounded">
                                  <img src="https://cdn.tuk.dev/assets/photo-1544476915-ed1370594142.jfif" alt="" class="h-full w-full object-cover overflow-hidden rounded" />
                              </div>
                              <div class="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                                  <p class="uppercase text-sm text-indigo-700 text-center pb-3">Analyse Technique</p>
                                  <p class="text-lg text-gray-800 text-center pb-3">Vous pensez que ça va monter ou que ça va descendre ?</p>
                                  <p class="text-sm text-gray-800 text-center">
                                      14 Février 2021 by <a href="javascript:void(0)"><span class="text-indigo-700 cursor-pointer">Sansa Rollins</span></a>
                                  </p>
                            </div>
                            </router-link>
                        </div>
                        <div class="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0">
                            <div class="shadow h-64 rounded">
                                <img src="https://cdn.tuk.dev/assets/photo-1462331940025-496dfbfc7564.jfif" alt="" class="h-full w-full object-cover overflow-hidden rounded" />
                            </div>
                            <div class="p-6 shadow-lg w-11/12 mx-auto -mt-20 bg-white rounded z-20 relative">
                                <p class="uppercase text-sm text-indigo-700 text-center pb-3">Nouveaux projets</p>
                                <p class="text-lg text-gray-800 text-center pb-3">En ce printemps de nombreux projets voient le jour, principalement sous la forme d'IDO dans l'écosysteme Polkadot, ...</p>
                                <p class="text-sm text-gray-800 text-center">
                                    1 Avril 2021 by <a href="javascript:void(0)"><span class="text-indigo-700 cursor-pointer">Ashley Wilson</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
      <div class="grid grid-cols-1 gap-3 m-10 max-w-1 justify-self-auto">
          <div class="min-w-0 p-6 text-white bg-purple-600 rounded-lg shadow-xs">
            <h2 class="mb-7 font-semibold">
              Qu'est ce que le Bitcoin ?
            </h2>
            <p>
             Pour créer et gérer les bitcoins, Bitcoin s'appuie sur un logiciel. Dans ce logiciel, les bitcoins sont créés conformément à un protocole qui rétribue les agents (appelés « mineurs ») qui ont traité des transactionsnote <br> 1. Ces agents mettent à contribution leur puissance de calcul informatique afin de vérifier, de sécuriser et d'inscrire les transactions dans un registre virtuelnote<br/> 2. appelé la blockchain, en français chaîne de blocs, nom qui vient du fait que l'entité de base de Bitcoin s'appelle un bloc, et que les blocs sont ensuite reliés en une chaîne, la chaine de blocs.
                  <br/><br/>
                    Pour chaque nouveau bloc accepté, l'activité de vérification-sécurisation-enregistrement, appelée minage, est rémunérée par des bitcoins nouvellement créés et par les frais des transactions traitées. En tant que monnaie ou commodité, les bitcoins peuvent être échangés contre d'autres monnaies ou commodités, biens ou services. Le taux d'échange de la cryptomonnaie est fixé sur des places de marché spécialisées et fluctue selon la loi de l'offre et de la demande.
                  <br/><br/>
                    Il est possible d'acheter des bitcoins en ligne sur des plateformes spécialisées, des bornes physiques ou en échange de n'importe quel bien ou service avec une personne en possédant déjà (la transaction peut se faire de smartphone à smartphone). Les plateformes permettent également de suivre en temps réel l'évolution du prix du bitcoin par rapport à d'autres monnaies ou cryptomonnaies.
            </p>
          </div>
      </div>
      <div class="grid grid-cols-2 gap-3 m-10 max-w-1 justify-self-auto">
          <div class="min-w-0 p-6 text-white bg-purple-600 rounded-lg shadow-xs">
            <h2 class="mb-7 font-semibold">
              {{ list_link[0].name }}
            </h2>
            <p>
              Il existe pléthore de plateformes proposant d’acheter des bitcoins. Nous avons réalisé un comparatif complet avec les forces et faiblesses des principaux sites (frais, niveau d’expérience requis, etc.). <br><br> Vous y trouverez des espaces de trading réservés aux investisseurs confirmés (Binance, Kraken, Bitstamp, etc.) et des courtiers plus intuitifs (Coinbase, Coinhouse, etc.).<br><br>Les seconds sont généralement plus simples à utiliser mais pratiquent des frais plus élevés. Il existe aussi quelques comptoirs physiques à Paris (Coinhouse), Caen (Bitcoin Avenue), Brest (Byzantine) ou Bordeaux (Comptoir des cybermonnaies). C'est l'occasion d'y recevoir des conseils personnalisés mais les frais sont également plus élevés.
            </p>
          </div>
          <div class="min-w-0 p-6 text-white bg-purple-600 rounded-lg shadow-xs">
            <h2 class="mb-7 font-semibold">
              {{ list_link[1].name }}
            </h2>
            <p>
              Vous avez 4 catégories :
                <ul>
                    <li><br> - Mobile : ce sont des portefeuilles sous forme d'application mobile. Tant que vous avez votre smartphone sur vous avec l'application, vous avez donc votre argent sur vous.</li>
                    <li><br> - Bureau : ce sont des portefeuilles pour des ordinateurs de bureau.</li>
                    <li><br> - Matériel : il s'agit de matériel dédié au Bitcoin qui vous permet de stocker vos Bitcoins de manière sécurisée (le plus souvent sur une sorte de clé USB).</li>
                    <li><br> - Web : ce sont des portefeuilles en ligne, stockés sur un site. Coinbase fait partie de la liste, car les Bitcoins que nous avons achetés peuvent rester là-bas.</li>
                </ul>
            </p>
          </div>
      </div>
        <h1 class="xl:text-4xl pt-4 xl:pt-0 text-3xl text-gray-800 text-center font-semibold mb-4">{{ list_link[2].name }}</h1>
      <div class="grid grid-cols-4 gap-3 m-10 max-w-1 justify-self-auto">
          <div class="min-w-0 p-6 text-white bg-purple-600 rounded-lg shadow-xs">
            <h2 class="mb-7 font-semibold">
              Un registre de données partagé et fiable
            </h2>
            <p>
              Les données stockées dans une blockchain sont partageables avec tous les autres acteurs autorisés de ce réseau. Une fois une information vérifiée et inscrite, elle n’est plus modifiable par aucun des acteurs du réseau. Couplée à ses capacités d’authentification forte et d’horodatage universel, la blockchain est un outil parfait pour permettre le partage de données qui ne pourront plus être modifiables a posteriori. Elle est donc particulièrement adaptée aux projets nécessitant de la transparence dans les échanges, de la traçabilité sur des données, ou des preuves d’antériorité. Lorsque des acteurs de différents types ont besoin de collaborer entre eux mais ne partagent pas les mêmes objectifs, elle peut servir d’outil de confiance et de piste d’audit.
            </p>
          </div>
          <div class="min-w-0 p-6 text-white bg-purple-600 rounded-lg shadow-xs">
            <h2 class="mb-7 font-semibold">
              De l'automatisation de processus
            </h2>
            <p>
              En mettant en relation directe les acteurs d'une transaction, la blockchain permet souvent de supprimer des couches d'intermédiation couteuses en en efficacité opérationnelle, en délai, ou tout simplement en frais financiers.
                    Les blockchains récentes proposent par ailleurs presque toutes une technologie de « smart contract » c’est-à-dire d’automatisation de transactions via des règles prédéfinies. En mettant d’accord différents acteurs d’une blockchain sur ces règles, ces smart contracts permettent d’activer des événements (transferts de données, paiements, etc…) sans avoir besoin d’intégrer les différents systèmes informatiques entre eux. Des règles claires, une absence de triche, une piste d’audit de qualité, et un coût de mise en œuvre réduit : beaucoup d’ingrédients sont réunis pour faciliter la collaboration inter-entités !
            </p>
          </div>
          <div class="min-w-0 p-6 text-white bg-purple-600 rounded-lg shadow-xs">
            <h2 class="mb-7 font-semibold">
              De l’échange de token de pair à pair
            </h2>
            <p>Un token n’est dans le langage blockchain qu’une devise virtuelle échangeable sur ce réseau, de pair à pair (P2P), sans donc avoir besoin de passer par une entité centrale. Si la faisabilité du token pour permettre de l’échange de fond est aujourd’hui prouvé par le succès de Bitcoin notamment, l’échange de token n’a pas forcément besoin d’être monétisé en devise traditionnelle (€/USD) pour représenter une valeur ajoutée. Vote en ligne, points de fidélité, avis consommateurs, transferts de fond, etc…le système d’échange de token est très prometteur.
                 </p>
          </div>
          <div class="min-w-0 p-6 text-white bg-purple-600 rounded-lg shadow-xs">
            <h2 class="mb-7 font-semibold">
              Une gouvernance décentralisée
            </h2>
            <p>
              Une blockchain peut proposer différents rôles : droits d’accès en écriture/lecture de l’information, règles de validation d’une transaction, règles de rémunération des participants à une blockchain, etc. Elle se déploie simplement à travers des nœuds, et plus son déploiement est large, plus sa valeur est grande car sa sécurité et son immuabilité garantie. De fait, une blockchain, et plus particulièrement une blockchain publique, n’appartient à personne, n’est pas stockée dans un endroit en particulier, et peut faire partager son coût de fonctionnement à tous ou certains de ses utilisateurs. Une fois les règles définies, il devient cependant impossible de tricher. C’est donc un outil particulièrement utile pour faire collaborer entre eux des acteurs n’ayant pas forcément naturellement confiance entre eux.
                </p>
          </div>
      </div>
      <div class="container">
          <h1 class="xl:text-3xl pt-4 xl:pt-0 text-3xl text-gray-800 text-center font-semibold mb-1">Sources</h1>
          <div class="links">
          <ul class="summary">
              <li><a href="https://www.capital.fr/entreprises-marches/acheter-bitcoin-1260680" class="text-purple-500 font-semibold hover:text-purple-600">Acheter des Bitcoins</a></li>
              <li><a class="text-purple-500 font-semibold hover:text-purple-600" href="https://openclassrooms.com/fr/courses/3925766-comprendre-le-bitcoin-et-la-blockchain/4162526-stocker-ses-bitcoins">Stocker ses Bitcoins</a></li>
              <li><a class="text-purple-500 font-semibold hover:text-purple-600" href="https://www.blockchain-ez.com/pourquoi-la-transformation-blockchain/">Plue-value de la blockchain</a></li>
          </ul>
          </div>
<div>
</div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'Infos',
  components: {
    Footer,
    Banner
  },
  data () {
    return {
      list_link: [
        { name: 'Comment en acheter ?' },
        { name: 'Comment les stocker ?' },
        { name: 'Quelle plus-value apporte la blockchain ?' }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
h1, h3 {
  color:#6C63FF;
}
.container {
    width: 80%;
    margin: auto;
}
.title {
    text-align: center;
}
p, p ul li {
    text-align: justify;
}

.summary {
    border: 1px solid black;
    border-radius: 16px;
    margin: auto;
    width: fit-content;
    padding: 10px 0;
    list-style-type: none;
}
.summary li {
    width: 20rem;
    margin: auto;
}

.a-link, .a-link:visited {
    text-decoration: none;
    color: black;
}
.a-link:hover {
    text-decoration: none;
    color: #6C63FF;
    font-size:13pt;
}
.wtb {
  /* margin-top: 2rem; */
  /* padding: 30px;
  border: 1px solid rgba(255, 255, 240, 1);
  border-radius: 8px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); */
}
.links {
  margin-top: 2rem;
  width: 40%;
  margin-left: 30%;
  padding: 20px;
  border: 1px solid rgba(255, 255, 240, 1);
  border-radius: 8px;
  background: rgba(255, 255, 245, 0.9);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.left {
    width: 20%;
    margin-right: 2rem;
    max-height: 100px;
}

.right {
  width: 80%;
}
</style>

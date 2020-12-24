<template>
  <div class="main-container">
      <div class="container">
          <br>
          <br>
          <h1 class="title">Qu'est ce que le Bitcoin ?</h1>
              <p>
                  Pour créer et gérer les bitcoins, Bitcoin s'appuie sur un logiciel. Dans ce logiciel, les bitcoins sont créés conformément à un protocole qui rétribue les agents (appelés « mineurs ») qui ont traité des transactionsnote 1. Ces agents mettent à contribution leur puissance de calcul informatique afin de vérifier, de sécuriser et d'inscrire les transactions dans un registre virtuelnote 2, appelé la blockchain, en français chaîne de blocs, nom qui vient du fait que l'entité de base de Bitcoin s'appelle un bloc, et que les blocs sont ensuite reliés en une chaîne, la chaine de blocs.
                <br><br>
                  Pour chaque nouveau bloc accepté, l'activité de vérification-sécurisation-enregistrement, appelée minage, est rémunérée par des bitcoins nouvellement créés et par les frais des transactions traitées5. En tant que monnaie ou commodité, les bitcoins peuvent être échangés contre d'autres monnaies ou commodités, biens ou services. Le taux d'échange de la cryptomonnaie est fixé sur des places de marché spécialisées et fluctue selon la loi de l'offre et de la demande.
                <br><br>
                  Il est possible d'acheter des bitcoins en ligne sur des plateformes spécialisées, des bornes physiques ou en échange de n'importe quel bien ou service avec une personne en possédant déjà (la transaction peut se faire de smartphone à smartphone). Les plateformes permettent également de suivre en temps réel l'évolution du prix du bitcoin par rapport à d'autres monnaies ou cryptomonnaies.
              </p>
          <ul class="summary" style="margin-top: 3rem; margin-bottom: 2rem;">
              <li v-for="link in list_link" :key="link.name">{{ link.name }}</li>
          </ul>
          <h3>{{ list_link[0].name }}</h3>
            <br>
            <div style="display: inline-flex; align-items: center;">
              <svg class="left" version="1.1" width="auto" height="auto" viewBox="0 0 37.25 37.25" style="enable-background:new 0 0 37.25 37.25;" xml:space="preserve">
    <g>
        <path d="M11.612,28.643c-0.172-0.101-0.424-0.191-0.752-0.275c0.306-0.104,0.553-0.232,0.738-0.393
            c0.188-0.162,0.328-0.347,0.426-0.552c0.102-0.207,0.151-0.426,0.151-0.657c0-0.316-0.094-0.607-0.28-0.875
            c-0.188-0.269-0.455-0.472-0.805-0.611c-0.134-0.055-0.294-0.098-0.47-0.131v-1.234H9.436v1.15H8.672v-1.15H7.487v1.15H5.679v0.969
            h0.273c0.186,0,0.311,0.016,0.375,0.051c0.064,0.033,0.111,0.078,0.139,0.137c0.027,0.055,0.04,0.188,0.04,0.396v3.902
            c0,0.203-0.013,0.334-0.04,0.393c-0.027,0.059-0.074,0.104-0.139,0.137c-0.064,0.031-0.189,0.047-0.375,0.047H5.679v0.967h1.809
            v1.152h1.185v-1.152h0.675c0.029,0,0.06,0,0.088,0v1.152h1.185v-1.25c0.2-0.037,0.375-0.088,0.522-0.146
            c0.409-0.161,0.727-0.399,0.949-0.715c0.227-0.312,0.336-0.653,0.336-1.024c0-0.312-0.072-0.595-0.221-0.847
            C12.063,28.979,11.864,28.782,11.612,28.643z M8.243,26.189h0.767c0.448,0,0.762,0.029,0.936,0.084
            c0.173,0.058,0.307,0.148,0.396,0.277c0.094,0.133,0.139,0.291,0.139,0.475c0,0.177-0.049,0.332-0.146,0.47
            c-0.099,0.135-0.242,0.235-0.435,0.303C9.708,27.866,9.411,27.9,9.007,27.9H8.241L8.243,26.189L8.243,26.189z M10.41,30.52
            c-0.139,0.172-0.303,0.287-0.499,0.344c-0.194,0.055-0.44,0.082-0.737,0.082H8.663c-0.17,0-0.274-0.01-0.313-0.027
            s-0.064-0.051-0.082-0.096c-0.013-0.039-0.021-0.164-0.023-0.381v-1.515h0.904c0.399,0,0.692,0.037,0.888,0.109
            c0.192,0.073,0.34,0.182,0.435,0.328c0.098,0.143,0.147,0.315,0.147,0.524C10.617,30.137,10.547,30.343,10.41,30.52z
            M33.297,19.507c-0.292-0.469-0.908-0.613-1.378-0.317l-4.76,2.977c-0.469,0.293-0.61,0.91-0.317,1.379
            c0.292,0.469,0.908,0.611,1.378,0.316l2.718-1.699c-1.441,4.962-5.776,8.622-11.021,9.104c-0.785,0.071-1.564,0.047-2.341-0.023
            c0.081-0.244,0.151-0.492,0.212-0.748c0.535-2.277,0.152-4.627-1.079-6.617s-3.165-3.381-5.44-3.916
            c-0.664-0.156-1.343-0.236-2.018-0.236c-4.079,0-7.583,2.777-8.521,6.756c-0.535,2.277-0.151,4.627,1.08,6.617
            c1.23,1.99,3.164,3.381,5.44,3.916c0.662,0.156,1.341,0.236,2.017,0.236c3.084,0,5.836-1.59,7.402-4.082
            c0.688,0.098,1.383,0.15,2.081,0.15c0.448,0,0.897-0.021,1.347-0.062c6.108-0.561,11.149-4.842,12.79-10.637l1.694,2.709
            c0.188,0.303,0.516,0.469,0.849,0.469c0.181,0,0.364-0.049,0.529-0.151c0.469-0.293,0.609-0.91,0.316-1.377L33.297,19.507z
            M9.266,35.247c-0.521,0-1.045-0.062-1.559-0.185c-1.757-0.414-3.248-1.485-4.199-3.021c-0.949-1.535-1.246-3.351-0.832-5.106
            c0.725-3.068,3.426-5.213,6.573-5.213c0.521,0,1.045,0.062,1.56,0.184c1.756,0.412,3.248,1.484,4.198,3.021
            c0.95,1.535,1.246,3.351,0.832,5.105C15.114,33.102,12.412,35.247,9.266,35.247z M30.004,0.232C29.343,0.078,28.667,0,27.993,0
            c-3.063,0-5.803,1.564-7.374,4.027c-1.054-0.137-2.125-0.176-3.203-0.079C11.336,4.507,6.313,8.753,4.649,14.509l-1.601-2.727
            c-0.278-0.478-0.892-0.638-1.368-0.356c-0.476,0.279-0.635,0.892-0.355,1.367l2.84,4.843c0.186,0.316,0.52,0.493,0.863,0.493
            c0.172,0,0.346-0.044,0.505-0.138l4.844-2.842c0.478-0.278,0.636-0.892,0.356-1.367c-0.28-0.477-0.893-0.639-1.369-0.355
            l-2.797,1.641c1.437-4.975,5.775-8.646,11.029-9.127c0.705-0.064,1.407-0.049,2.105,0.005c-0.091,0.265-0.171,0.534-0.236,0.811
            c-0.536,2.276-0.153,4.627,1.079,6.617c1.23,1.99,3.164,3.382,5.441,3.919c0.662,0.155,1.34,0.234,2.015,0.234
            c4.083,0,7.588-2.778,8.521-6.756C37.633,6.07,34.708,1.343,30.004,0.232z M34.578,10.312c-0.722,3.068-3.427,5.213-6.575,5.213
            c-0.521,0-1.044-0.062-1.557-0.182c-1.758-0.414-3.25-1.488-4.199-3.023c-0.95-1.536-1.246-3.35-0.831-5.105
            C22.141,4.145,24.844,2,27.993,2c0.521,0,1.042,0.061,1.553,0.182C33.176,3.037,35.434,6.685,34.578,10.312z M30.637,10.392
            c0,1.066-0.756,1.979-2.135,2.219v1.223h-1.176v-1.139c-0.806-0.036-1.583-0.252-2.039-0.516l0.358-1.404
            c0.504,0.275,1.211,0.527,1.992,0.527c0.684,0,1.15-0.264,1.15-0.742c0-0.457-0.386-0.744-1.271-1.045
            c-1.283-0.432-2.158-1.031-2.158-2.193c0-1.057,0.744-1.883,2.026-2.135V4.046h1.175v1.057c0.805,0.035,1.344,0.203,1.739,0.396
            l-0.348,1.354c-0.312-0.131-0.863-0.407-1.729-0.407c-0.779,0-1.031,0.336-1.031,0.672c0,0.396,0.42,0.647,1.438,1.03
            C30.061,8.652,30.637,9.31,30.637,10.392z"/>
    </g>
            </svg>
              <p class="right">
                  Il existe pléthore de plateformes proposant d’acheter des bitcoins. Nous avons réalisé un comparatif complet avec les forces et faiblesses des principaux sites (frais, niveau d’expérience requis, etc.). Vous y trouverez des espaces de trading réservés aux investisseurs confirmés (Binance, Kraken, Bitstamp, etc.) et des courtiers plus intuitifs (Coinbase, Coinhouse, etc.). Les seconds sont généralement plus simples à utiliser mais pratiquent des frais plus élevés. Il existe aussi quelques comptoirs physiques à Paris (Coinhouse), Caen (Bitcoin Avenue), Brest (Byzantine) ou Bordeaux (Comptoir des cybermonnaies). C'est l'occasion d'y recevoir des conseils personnalisés mais les frais sont également plus élevés.
              </p>
          </div>
          <h3>{{ list_link[1].name }}</h3>
            <br>
          <div style="display: inline-flex; align-items: center;">
              <svg class="left" version="1.1" width="auto" height="auto" viewBox="0 0 38.027 38.027" style="enable-background:new 0 0 38.027 38.027;" xml:space="preserve">
    <g>
        <path d="M35.63,7.074C26.181,4.043,19.018,0,19.018,0h-0.011c0,0-7.058,4.098-16.609,7.074c0,0-3.351,21.314,16.56,30.953h0.11
            C38.981,28.389,35.63,7.074,35.63,7.074z M19.245,35.898l-0.231,0.121l-0.233-0.123C4.078,28.158,3.8,13.189,4.064,8.787
            l0.02-0.338l0.322-0.106c6.917-2.291,12.364-5.057,14.384-6.14l0.234-0.125l0.235,0.123c2.041,1.071,7.525,3.814,14.376,6.135
            l0.315,0.107l0.022,0.331C34.279,13.162,34.113,28.088,19.245,35.898z M32.997,9.174c-6.524-2.235-11.779-4.826-13.969-5.965
            c-2.172,1.152-7.397,3.766-13.985,5.976C4.829,13.79,5.418,27.582,19.014,34.891C32.765,27.514,33.253,13.758,32.997,9.174z
            M18.878,28.451c-5.586,0-10.114-4.527-10.114-10.113S13.292,8.224,18.878,8.224s10.114,4.528,10.114,10.114
            S24.465,28.451,18.878,28.451z M19.014,27.576c-0.529,0-1.061-0.047-1.579-0.137c-0.272-0.047-0.454-0.307-0.407-0.578
            c0.048-0.271,0.302-0.455,0.579-0.408c0.928,0.162,1.903,0.162,2.829-0.002c0.271-0.051,0.531,0.133,0.579,0.404
            c0.048,0.273-0.133,0.531-0.404,0.58C20.087,27.529,19.55,27.576,19.014,27.576z M14.699,26.426c-0.085,0-0.17-0.021-0.25-0.068
            c-0.925-0.533-1.744-1.219-2.434-2.037c-0.178-0.211-0.151-0.527,0.06-0.705c0.211-0.18,0.527-0.148,0.705,0.061
            c0.614,0.729,1.344,1.34,2.169,1.814c0.239,0.141,0.321,0.445,0.183,0.686C15.039,26.334,14.871,26.426,14.699,26.426z
            M23.342,26.416c-0.172,0-0.341-0.088-0.434-0.25c-0.14-0.238-0.058-0.545,0.183-0.682c0.822-0.479,1.551-1.09,2.165-1.82
            c0.177-0.213,0.493-0.238,0.703-0.062c0.213,0.178,0.239,0.494,0.062,0.705c-0.688,0.818-1.506,1.506-2.43,2.041
            C23.514,26.396,23.427,26.416,23.342,26.416z M10.892,21.902c-0.204,0-0.396-0.125-0.47-0.328c-0.366-1-0.553-2.051-0.555-3.124
            c0-0.276,0.223-0.5,0.499-0.501c0,0,0,0,0.001,0c0.276,0,0.5,0.223,0.5,0.499c0.002,0.957,0.168,1.894,0.494,2.784
            c0.095,0.258-0.039,0.545-0.298,0.641C11.008,21.893,10.95,21.902,10.892,21.902z M27.141,21.889c-0.058,0-0.113-0.01-0.171-0.031
            c-0.26-0.094-0.395-0.381-0.299-0.641c0.323-0.891,0.487-1.828,0.487-2.786c0-0.275,0.225-0.518,0.5-0.518s0.5,0.206,0.5,0.481
            v0.035c0,1.074-0.186,2.127-0.549,3.127C27.536,21.762,27.346,21.889,27.141,21.889z M10.881,15.991c-0.057,0-0.114-0.01-0.17-0.03
            c-0.26-0.094-0.394-0.381-0.3-0.64c0.363-1.005,0.896-1.931,1.583-2.752c0.177-0.212,0.492-0.241,0.705-0.063
            c0.212,0.177,0.24,0.493,0.063,0.705c-0.613,0.732-1.087,1.557-1.41,2.45C11.278,15.865,11.086,15.991,10.881,15.991z
            M27.129,15.941c-0.204,0-0.396-0.125-0.47-0.326c-0.328-0.892-0.808-1.712-1.424-2.441c-0.179-0.211-0.152-0.526,0.06-0.705
            c0.211-0.179,0.526-0.152,0.704,0.06c0.691,0.817,1.229,1.74,1.6,2.74c0.096,0.26-0.037,0.546-0.296,0.643
            C27.244,15.932,27.187,15.941,27.129,15.941z M14.672,11.454c-0.172,0-0.34-0.089-0.433-0.249
            c-0.139-0.239-0.058-0.544,0.181-0.685c0.925-0.539,1.928-0.906,2.979-1.094c0.278-0.049,0.532,0.133,0.58,0.404
            c0.048,0.271-0.133,0.532-0.404,0.58c-0.937,0.167-1.83,0.495-2.653,0.974C14.844,11.432,14.757,11.454,14.672,11.454z
            M23.312,11.428c-0.084,0-0.17-0.021-0.249-0.065c-0.826-0.476-1.721-0.798-2.658-0.958c-0.271-0.047-0.455-0.306-0.408-0.577
            c0.046-0.271,0.307-0.452,0.577-0.408c1.054,0.181,2.06,0.543,2.987,1.076c0.239,0.138,0.322,0.442,0.186,0.683
            C23.654,11.338,23.485,11.428,23.312,11.428z M22.842,19.242c-0.18-0.308-0.421-0.545-0.726-0.716
            c-0.211-0.122-0.517-0.234-0.913-0.336c0.37-0.126,0.668-0.284,0.896-0.479c0.226-0.193,0.397-0.415,0.52-0.666
            c0.12-0.252,0.181-0.519,0.181-0.799c0-0.385-0.113-0.739-0.34-1.063c-0.229-0.321-0.552-0.569-0.974-0.742
            c-0.164-0.067-0.359-0.117-0.569-0.157v-1.499h-1.439v1.396h-0.925v-1.396h-1.439v1.396h-2.194v1.175h0.335
            c0.223,0,0.374,0.021,0.453,0.062c0.08,0.04,0.135,0.095,0.167,0.164c0.033,0.069,0.049,0.229,0.049,0.479v4.738
            c0,0.248-0.016,0.406-0.049,0.479c-0.032,0.072-0.088,0.125-0.167,0.164s-0.23,0.061-0.453,0.061h-0.335v1.174h2.194v1.396h1.439
            v-1.396h0.818c0.037,0,0.07,0,0.106,0v1.396h1.438v-1.518c0.241-0.047,0.453-0.105,0.635-0.178
            c0.497-0.199,0.881-0.488,1.151-0.869c0.271-0.379,0.408-0.793,0.408-1.244C23.11,19.891,23.02,19.549,22.842,19.242z
            M20.089,15.655c0.211,0.066,0.373,0.179,0.484,0.338c0.11,0.158,0.166,0.348,0.166,0.571c0,0.217-0.059,0.406-0.177,0.57
            c-0.117,0.164-0.292,0.286-0.526,0.368c-0.233,0.082-0.593,0.122-1.081,0.122h-0.932v-2.07h0.932
            C19.499,15.554,19.878,15.587,20.089,15.655z M19.155,21.32h-0.62c-0.207,0-0.333-0.012-0.379-0.033
            c-0.047-0.021-0.081-0.061-0.101-0.117c-0.017-0.047-0.026-0.195-0.03-0.457v-1.84h1.099c0.482,0,0.842,0.045,1.076,0.135
            c0.234,0.09,0.411,0.223,0.528,0.396c0.117,0.176,0.177,0.387,0.177,0.638c0,0.299-0.083,0.553-0.249,0.764
            s-0.368,0.352-0.604,0.416C19.814,21.287,19.515,21.32,19.155,21.32z"/>
    </g>
              </svg>
              <p>
                Vous avez 4 catégories :
                <ul>
                    <li>Mobile : ce sont des portefeuilles sous forme d'application mobile. Tant que vous avez votre smartphone sur vous avec l'application, vous avez donc votre argent sur vous.</li>
                    <li>Bureau : ce sont des portefeuilles pour des ordinateurs de bureau.</li>
                    <li>Matériel : il s'agit de matériel dédié au Bitcoin qui vous permet de stocker vos Bitcoins de manière sécurisée (le plus souvent sur une sorte de clé USB).</li>
                    <li>Web : ce sont des portefeuilles en ligne, stockés sur un site. Coinbase fait partie de la liste, car les Bitcoins que nous avons achetés peuvent rester là-bas.</li>
                </ul>
              </p>
          </div>
          <h3>{{ list_link[2].name }}</h3>
            <br>
          <p>
            Un registre de données partagé et fiable
            Les données stockées dans une blockchain sont partageables avec tous les autres acteurs autorisés de ce réseau. Une fois une information vérifiée et inscrite, elle n’est plus modifiable par aucun des acteurs du réseau. Couplée à ses capacités d’authentification forte et d’horodatage universel, la blockchain est un outil parfait pour permettre le partage de données qui ne pourront plus être modifiables a posteriori. Elle est donc particulièrement adaptée aux projets nécessitant de la transparence dans les échanges, de la traçabilité sur des données, ou des preuves d’antériorité. Lorsque des acteurs de différents types ont besoin de collaborer entre eux mais ne partagent pas les mêmes objectifs, elle peut servir d’outil de confiance et de piste d’audit.
            <br>
            <br>
            <ul>
                <li>De l'automatisation de processus
                    En mettant en relation directe les acteurs d'une transaction, la blockchain permet souvent de supprimer des couches d'intermédiation couteuses en en efficacité opérationnelle, en délai, ou tout simplement en frais financiers.
                    Les blockchains récentes proposent par ailleurs presque toutes une technologie de « smart contract » c’est-à-dire d’automatisation de transactions via des règles prédéfinies. En mettant d’accord différents acteurs d’une blockchain sur ces règles, ces smart contracts permettent d’activer des événements (transferts de données, paiements, etc…) sans avoir besoin d’intégrer les différents systèmes informatiques entre eux. Des règles claires, une absence de triche, une piste d’audit de qualité, et un coût de mise en œuvre réduit : beaucoup d’ingrédients sont réunis pour faciliter la collaboration inter-entités !
                </li>
                <br>
                <li>De l’échange de token de pair à pair
                    Un token n’est dans le langage blockchain qu’une devise virtuelle échangeable sur ce réseau, de pair à pair (P2P), sans donc avoir besoin de passer par une entité centrale. Si la faisabilité du token pour permettre de l’échange de fond est aujourd’hui prouvé par le succès de Bitcoin notamment, l’échange de token n’a pas forcément besoin d’être monétisé en devise traditionnelle (€/USD) pour représenter une valeur ajoutée. Vote en ligne, points de fidélité, avis consommateurs, transferts de fond, etc…le système d’échange de token est très prometteur.
                </li>
                <br>
                <li>La blockchain permet aussi de gérer des tokens « non fongibles », c’est-à-dire unique, et potentiellement associé à un bien matériel. Si nous associons la propriété d’un token à la propriété d’une œuvre d’art, la vente du token peut-elle correspondre à la vente de l’œuvre d’art ? Nous croyons qu’effectivement le transfert de la propriété de biens via une blockhain sera une réalité très rapidement (copyrights, œuvres d’art, parts de sociétés non cotées, etc…).
                </li>
                <br>
                <li>Une gouvernance décentralisée
                    Une blockchain peut proposer différents rôles : droits d’accès en écriture/lecture de l’information, règles de validation d’une transaction, règles de rémunération des participants à une blockchain, etc. Elle se déploie simplement à travers des nœuds, et plus son déploiement est large, plus sa valeur est grande car sa sécurité et son immuabilité garantie. De fait, une blockchain, et plus particulièrement une blockchain publique, n’appartient à personne, n’est pas stockée dans un endroit en particulier, et peut faire partager son coût de fonctionnement à tous ou certains de ses utilisateurs. Une fois les règles définies, il devient cependant impossible de tricher. C’est donc un outil particulièrement utile pour faire collaborer entre eux des acteurs n’ayant pas forcément naturellement confiance entre eux.
                </li>
            </ul>
          </p>
          <h3 style="margin-top: 2rem;">Sources</h3>
          <ul class="summary">
              <li>Liens :</li>
              <li><a class="a-link" href="https://www.capital.fr/entreprises-marches/acheter-bitcoin-1260680">Acheter des Bitcoins</a></li>
              <li><a class="a-link" href="https://openclassrooms.com/fr/courses/3925766-comprendre-le-bitcoin-et-la-blockchain/4162526-stocker-ses-bitcoins">Stocker ses Bitcoins</a></li>
              <li><a class="a-link" href="https://www.blockchain-ez.com/pourquoi-la-transformation-blockchain/">Plue-value de la blockchain</a></li>
          </ul>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'Infos',
  components: {
    Footer
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

<style lang="scss" scoped>
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

}

.left {
    width: 20%;
    margin-right: 2rem;
    max-height: 100px;
}
</style>

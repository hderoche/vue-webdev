##### English version below

# Projet de Développement Web

|           | Framework     | Libraries     |
| --------- |:-------------:|:-------------:|
| Front     | Vue.js        |               |
| Back      | Node.js       | Express, dotenv, fs, jwt |

### Fichiers `.env`
Les fichiers `.env` ne sont pas censés être dans les répo git mais dans le `.gitignore`, cependant pour que le projet puisse se lancer facilement nous les avons ajoutés.
Ces clés seront désactivés après la fin du semestre et ne seront plus utiles.

**Merci de ne pas les utiliser en dehors de ce projet.**

### Git
S'il y a peu de commit sur ce dossier, c'est parce que j'ai commencé par faire un repo git pour le front et un autre pour le server.
Je viens d'en faire un seul projet git

## Front

Pour lancer le vue : 

```
cd front
npm install
npm run serve
```
La partie front démarre en mode développement (hot-reload) sur le port 8080, nous avons essayé de le déployer en `npm run build` mais le proxy ne marche plus avec le server.
Il faut aussi télécharger le package **serve** pour pouvoir host le dossier `./dist`

La partie front-end est en vue.js, elle regroupe et utilise tous les éléments vus en cours.
* Fetch et requetes vers un server
* Module d'authentification (JWT token)
* Manipulation de DOM, css, html
* Manipulation d'array et différents types javascript
* Utilisation des router-links pour éviter le rechargement des pages
* Composants et Vue de Vue.js
* Proxy vers le server (phase de developpement seulement)
* ...

## Server


Pour lancer le serveur : 

```
cd server
npm install
npm run start
```
Le serveur démarre en mode développement en utilisant **nodemon** (hot-reload), nous avions essayé de voir pour le mettre sur heroku, mais sans succès.

La partie server est codée en Node.js avec le framework minimaliste Express.js
Elle utilise aussi toutes les notions vus en cours : 
* Fetch (isomorphic-fetch) pour appel vers des API
* Module d'autentification
* Utilisation d'un `.env` pour stocker les variables sensibles (clés API)
* Utilisation du cache pour éviter la surcharge de requete vers les API
  * si deux requetes sont faites avant le `timeout` alors j'utilise le cache comme données
  * sinon je renvoie une requete pour avoir les données les plus récentes
* ...

#### Autres projets de Webdev fait sur le semestre

J'ai réalisé une version temporaire du site de mon association avec Angular :
https://devincipartners.netlify.app/

# Web dev Project

### Git
There is not many commit on this project because I started using one repo for the front and one for the back. 
I just marged them

## Front


To start the front-end : 

```
cd front
npm install
npm run serve
```

The front end part of the website is built using Vue.js framework and uses all the notions we've seen during class.
* Fetch et request to server
* Authentication module (JWT token)
* DOM manipulation, css and Html
* Array, and object manipulation in javascript
* Use of router-link to avoid refreshing the page on each server request
* Components and views from vue.js
* Proxy (for development phase only)
* ...

## Server

To start the server :

```
cd server
npm install
npm run start
```

The server is coded in node.js using the minimalist framework express.js.
The server also uses and implements all the features seen during class.
* Fetch using the isomorphic-fetch module
* Authentication module, using database in json (fs library)
* `.env` to store sensitive variable
* use of cache to avoid the **Too many request sent to the API**
  * meaning that I store the values of the request in a `.json` file
  * if two request are made too close to each other, I use the cache in order to display the informations
  * if the request is made after a certain `timeout` variable that I have set in the code, then it sends a request to fetch the most recent data.
* 

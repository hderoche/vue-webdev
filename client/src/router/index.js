import { createRouter, createWebHistory } from 'vue-router'
import { checkTokenBeforeEnter } from './router-utils'

import LandingView from '../views/Landing.vue'
import Erc from '../views/Erc.vue'
import CryptoView from '../views/Crypto.vue'
import About from '../views/About.vue'
import Details from '../components/CryptoDetails.vue'
import Infos from '../views/Infos.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'
import Minage from '../views/Article_Minage.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/erc20',
    name: 'ERC-20',
    component: Erc,
    beforeEnter: checkTokenBeforeEnter
  },
  {
    path: '/crypto',
    name: 'Crypto',
    component: CryptoView
  },
  {
    path: '/coin/:symbol',
    name: 'Details',
    component: Details
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/infos',
    name: 'Infos',
    component: Infos
  },
  {
    path: '/minage',
    name: 'Minage',
    component: Minage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

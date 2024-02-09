import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AmericaView from '../views/AmericaView.vue'
import AfricaView from '../views/AfricaView.vue'
import AsiaView from '../views/AsiaView.vue'
import EuropeView from '../views/EuropeView.vue'
import OceaniaView from '../views/OceaniaView.vue'
import CountryView from '../views/CountryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/america',
      name: 'america',
      component: AmericaView
    },
    {
      path: '/africa',
      name: 'africa',
      component: AfricaView
    },
    {
      path: '/asia',
      name: 'asia',
      component: AsiaView
    },
    {
      path: '/europe',
      name: 'europe',
      component: EuropeView
    },
    {
      path: '/oceania',
      name: 'oceania',
      component: OceaniaView
    },
      {
        path: '/country/:details',
        name: 'country',
        component: CountryView
      },
  ]
})

export default router

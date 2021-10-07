import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CurrencyConverter',
      meta: { layout: 'main-layout' },
      component: () => import('./views/CurrencyConverter.vue')
    },
    {
      path: '/exchange',
      name: 'ExchangeRates',
      meta: { layout: 'main-layout' },
      component: () => import('./views/ExchangeRates.vue')
    },
  ]
});

export default router;
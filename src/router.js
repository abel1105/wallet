import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login';
import Checkout from '@/views/Checkout';
import Thanks from '@/views/Thanks';
import CheckoutShip from '@/views/checkout/CheckoutShip';
import CheckoutFull from '@/views/checkout/CheckoutFull';
import CheckoutPayment from '@/views/checkout/CheckoutPayment';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/checkout',
      component: Checkout,
      children: [
        {
          path: '',
          name: 'checkout',
          component: CheckoutFull
        },
        {
          path: 'ship',
          name: 'ship',
          component: CheckoutShip
        },
        {
          path: 'payment',
          name: 'payment',
          component: CheckoutPayment
        }
      ]
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    }
  ]
});

import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Pay from '@/views/Pay';
import Login from '@/views/Login';

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
      path: '/pay',
      name: 'pay',
      component: Pay,
      children: [
        {
          path: 'login',
          name: 'pay-login',
          component: Login
        }
      ]
    }
  ]
});

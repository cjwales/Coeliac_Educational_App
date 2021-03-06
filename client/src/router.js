import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Kids from '@/views/Kids';
import Parents from '@/views/Parents';
import Restaurants from '@/views/Restaurants';
import Admin from '@/views/Admin';
import Login from '@/views/Login';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/kids',
      name: 'kids',
      component: Kids
    },
    {
      path: '/parents',
      name: 'parents',
      component: Parents
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router;

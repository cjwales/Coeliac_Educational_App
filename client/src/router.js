import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Kids from '@/views/Kids';
import Parents from '@/views/Parents';
import Restaurants from '@/views/Restaurants';
import Ratings from '@/views/Ratings';

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
      path: '/restaurants/ratings',
      name: 'ratings',
      component: Ratings
    }

  ]
})

export default router;

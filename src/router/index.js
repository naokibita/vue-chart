import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import VueChartJS from '@/components/VueChartJS';

// Specify that we want to use Vue Router
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/chartjs',
      name: 'VueChartJS',
      component: VueChartJS,
    },
  ],
});

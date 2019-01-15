import Vue from 'vue';
import Router from 'vue-router';
import VueChartJS from '@/components/VueChartJS';

// Specify that we want to use Vue Router
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'VueChartJS',
      component: VueChartJS,
    },
  ],
});

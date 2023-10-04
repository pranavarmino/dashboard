import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardLayout from '@/components/DashboardLayout.vue';
import DashboardHome from '@/components/DashboardHome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      { path: '', component: DashboardHome },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

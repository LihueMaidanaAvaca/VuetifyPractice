// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */'@/views/Login.vue'),
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/history',
        name: 'History',
        component: () => import(/* webpackChunkName: "history" */ '@/views/History.vue'),
      },
      {
        path: '/payselector',
        name: 'PaymentSelector',
        component: () => import(/* webpackChunkName: "payments" */ '@/views/PaymentSelector.vue'),
      },
      {
        path: '/ticketgenerator',
        name: 'TicketGenerator',
        component: () => import(/* webpackChunkName: "generator" */ '@/views/TicketGenerator.vue'),
      },
      {
        path: '/b-response',
        name: 'BoletaResponse',
        component: () => import(/* webpackChunkName: "generator" */ '@/components/responses/BoletaResponse.vue'),
      },
      {
        path: '/v-response',
        name: 'VEPResponse',
        component: () => import(/* webpackChunkName: "generator" */ '@/components/responses/VepResponse.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('authToken');
  if (!token && to.name !== 'Login') {
    // Si no hay token y no estás en la página de inicio de sesión,
    // redirige a la página de inicio de sesión
    next({ name: 'Login' });
  } else {
    // Si hay token o estás en la página de inicio de sesión, permite la navegación
    next();
  }
});

export default router

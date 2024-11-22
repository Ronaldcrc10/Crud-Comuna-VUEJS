import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Crear from '../components/Crear.Vue'
import Editar from '../components/Editar.Vue'
import Listar from '../components/Listar.Vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: ComunaList, 
  },
  {
    path: '/comunas',
    name: 'Comunas',
    component: ComunaList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
